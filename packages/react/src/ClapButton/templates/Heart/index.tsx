/** @jsxRuntime classic */
/* @jsx jsx */

import { jsx, ThemeUIStyleObject } from 'theme-ui';
import { ClapButtonTemplateComponentProps } from '../..';
import { ClapHeart } from './icons/ClapHeart';
import { keyframes } from '@emotion/react';
import { FC, useCallback, useState, useRef } from 'react';
import { style } from './style';

const baloonFade = keyframes({
  '0%': {
    opacity: '0.2',
    transform: 'translateY(-3.2em)',
  },
  '72%': {
    opacity: '1',
    transform: 'translateY(-3.8em)',
  },
  '100%': {
    opacity: '0',
    transform: 'translateY(-5.2em)',
  },
});

const triangleFade = keyframes({
  '0%': {
    opacity: '0',
    transform: 'translateY(-0.5em) scale(1)',
  },
  '32%': {
    opacity: '1',
    transform: 'translateY(-1em) scale(1.3)',
  },
  '100%': {
    opacity: '0',
    transform: 'translateY(-2em) scale(1.6)',
  },
});

const iconScale = keyframes({
  '0%': {
    transform: 'scale(1)',
  },
  '32%': {
    transform: 'scale(1.1)',
  },
  '100%': {
    transform: 'scale(1.05)',
  },
});

const BALOON = {
  durationMs: 800,
  animation: baloonFade,
};

const TRIANGLES = {
  count: 5,
  size: 0.2,
  color: theme => theme.rawColors?.secondary,
  durationMs: 300,
  animation: triangleFade,
};

const CIRCLES = {
  count: 5,
  size: 0.05,
  color: theme => theme.rawColors?.primary,
  durationMs: 500,
  animation: triangleFade,
};

const ICON = {
  durationMs: CIRCLES.durationMs,
  animation: iconScale,
};

export const Heart: FC<ClapButtonTemplateComponentProps> = ({
  isLoading,
  userClaps,
  totalClaps,
  handlePress,
  isCounterVisible,
}) => {
  const [animationActive, setAnimationActive] = useState<boolean>(false);

  const triangles = [];
  for (let i = 0; i < TRIANGLES.count; i++) {
    const trianglesStyle: ThemeUIStyleObject = {
      width: '0',
      height: '0',
      opacity: '0',
      borderLeft: `${TRIANGLES.size}em solid transparent`,
      borderRight: `${TRIANGLES.size}em solid transparent`,
      borderTop: `${TRIANGLES.size}em solid ${TRIANGLES.color}`,
      position: 'absolute',
      animation: animationActive
        ? `${triangleFade} ${TRIANGLES.durationMs}ms ease forwards`
        : null,
    };

    const trianglesContainerStyle = {
      transform: `rotate(${(360 / TRIANGLES.count) * i}deg)`,
      transformOrigin: `${TRIANGLES.size}em 0`,
      marginLeft: `-${TRIANGLES.size}em`,
    };

    triangles.push(
      <div key={i} sx={trianglesContainerStyle}>
        <div sx={trianglesStyle} />
      </div>
    );
  }

  const circles = [];
  for (let i = 0; i < CIRCLES.count; i++) {
    const circlesStyle: ThemeUIStyleObject = {
      width: '0',
      height: '0',
      opacity: '0',
      padding: `${CIRCLES.size}em`,
      backgroundColor: `${CIRCLES.color}`,
      borderRadius: '100%',
      position: 'absolute',
      animation: animationActive
        ? `${triangleFade} ${CIRCLES.durationMs}ms ease forwards`
        : null,
    };

    const circleContainerStyle = {
      transform: `rotate(${(360 / CIRCLES.count) * i}deg)`,
      transformOrigin: `${CIRCLES.size}em 0`,
      marginLeft: `-${CIRCLES.size}em`,
    };

    circles.push(
      <div key={i} sx={circleContainerStyle}>
        <div sx={circlesStyle} />
      </div>
    );
  }

  const timeoutId = useRef<NodeJS.Timeout | null>(null);

  const handleClick = useCallback(
    (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
      setAnimationActive(true);
      if (timeoutId.current) {
        clearTimeout(timeoutId.current);
      }
      timeoutId.current = setTimeout(
        () => setAnimationActive(false),
        BALOON.durationMs
      );
      handlePress(e);
    },
    [handlePress]
  );

  const iconStyle = {
    ...style.icon,
    fill: theme =>
      userClaps && userClaps > 0
        ? theme.rawColors?.highlight
        : theme.rawColors?.icon,
    animation: animationActive
      ? `${ICON.animation} ${ICON.durationMs}ms ease forwards`
      : null,
  };

  const baloonStyle = {
    ...style.baloon,
    ...{
      animation: animationActive
        ? `${BALOON.animation} ${BALOON.durationMs}ms ease forwards`
        : null,
    },
  };

  return (
    <div sx={style.root}>
      <div sx={style.buttonContainer}>
        <div sx={style.centeredContainer}>
          <div
            key={timeoutId.current?.toString()}
            sx={baloonStyle}
          >
            {userClaps}
          </div>
        </div>
        <button onClick={handleClick} sx={style.button} disabled={isLoading}>
          <div sx={style.centeredContainer}> {triangles} </div>
          <div sx={style.centeredContainer}> {circles} </div>
          <ClapHeart sx={iconStyle} />
        </button>
      </div>

      {isCounterVisible && <div sx={style.counter}>{totalClaps}</div>}
    </div>
  );
};
