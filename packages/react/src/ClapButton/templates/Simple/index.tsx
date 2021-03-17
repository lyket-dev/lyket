/* @jsx jsx */

import { jsx, ThemeProvider } from 'theme-ui';
import { ClapButtonTemplateComponentProps } from '../..';
import { ClapFull } from './icons/ClapFull';
import { keyframes } from '@emotion/core';
import { FC, useCallback, useState, useRef } from 'react';
import { style } from './style';
import theme from './theme';

const baloonFade = keyframes({
  '0%': {
    opacity: '0',
    transform: 'translateY(-1em)',
  },
  '72%': {
    opacity: '1',
    transform: 'translateY(-4em)',
  },
  '100%': {
    opacity: '0',
    transform: 'translateY(-6em)',
  },
});

const iconScale = keyframes({
  '0%': {
    transform: 'scale(0)',
  },
  '52%': {
    transform: 'scale(1.2)',
  },
  '72%': {
    transform: 'scale(0.9)',
  },
  '100%': {
    transform: 'scale(1)',
  },
});

const ringScale = keyframes({
  '0%': {
    opacity: '1',
    borderWidth: '0.5em',
  },
  '52%': {
    opacity: '0',
    borderWidth: '0',
  },
});

const BALOON = {
  durationMs: 800,
  animation: baloonFade,
};

const ICON = {
  durationMs: 500,
  animation: iconScale,
};

const RING = {
  durationMs: 600,
  animation: ringScale,
};

export const Simple: FC<ClapButtonTemplateComponentProps> = ({
  isLoading,
  userClaps,
  totalClaps,
  handlePress,
  isCounterVisible,
}) => {
  const [animationActive, setAnimationActive] = useState<boolean>(false);

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

  const baloonStyle = {
    ...style.baloon,
    ...{
      animation: animationActive
        ? `${BALOON.animation} ${BALOON.durationMs}ms ease forwards`
        : null,
    },
  };

  const iconStyle = {
    ...style.icon,
    ...{
      animation: animationActive
        ? `${ICON.animation} ${ICON.durationMs}ms ease forwards`
        : null,
    },
  };

  const ringStyle = {
    ...style.ring,
    ...{
      animation: animationActive
        ? `${RING.animation} ${RING.durationMs}ms ease forwards`
        : null,
    },
  };

  const buttonStyle = {
    ...style.button,
    variant: userClaps ? 'buttons.active' : 'buttons.inactive',
    '@media (hover: hover)': {
      ':hover': {
        bg: userClaps ? 'primary' : 'background',
      },
    },
  };

  return (
    <ThemeProvider theme={theme}>
      <div sx={style.root}>
        <button onClick={handleClick} sx={buttonStyle} disabled={isLoading}>
          <div sx={style.centeredContainer}>
            <div
              key={timeoutId.current && timeoutId.current.toString()}
              sx={baloonStyle}
            >
              {userClaps}
            </div>
          </div>
          <div sx={ringStyle} />
          <ClapFull sx={iconStyle} />
        </button>
        {isCounterVisible && <div sx={style.counter}>{totalClaps}</div>}
      </div>
    </ThemeProvider>
  );
};
