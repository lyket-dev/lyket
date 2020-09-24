/* @jsx jsx */

import { jsx, ThemeProvider } from 'theme-ui';
import { ClapButtonThemeComponentProps } from '../..';
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
    transform: 'scale(1)',
  },
  '32%': {
    transform: 'scale(1.15)',
  },
  '100%': {
    transform: 'scale(1.1)',
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
  color: '#e095ed',
  durationMs: 600,
  animation: ringScale,
};

export const Simple: FC<ClapButtonThemeComponentProps> = ({
  isLoading,
  userClaps,
  totalClaps,
  onClick,
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
      onClick(e);
    },
    [onClick]
  );

  const ringStyle = {
    ...style.ring,
    ...{
      animation: animationActive
        ? `${RING.animation} ${RING.durationMs}ms ease forwards`
        : null,
    },
  };

  return (
    <ThemeProvider theme={theme}>
      <div sx={style.root}>
        <button
          onClick={handleClick}
          sx={{
            ...style.button,
            ...{
              variant: userClaps ? 'buttons.upActive' : 'buttons.upInactive',
              '@media (hover: hover)': {
                ':hover': {
                  variant: 'buttons.upActive',
                  transition: 'all 0.2s ease-in-out',
                },
              },
            },
          }}
          disabled={isLoading}
        >
          <div sx={style.centeredContainer}>
            <div
              key={timeoutId.current as number | null}
              sx={{
                ...style.baloon,
                ...{
                  animation: animationActive
                    ? `${BALOON.animation} ${BALOON.durationMs}ms ease forwards`
                    : null,
                },
              }}
            >
              {userClaps}
            </div>
          </div>
          <div sx={ringStyle} />
          <ClapFull
            sx={{
              ...style.icon,
              ...{
                fill: isLoading ? '#aaa' : 'auto',
                animation: animationActive
                  ? `${ICON.animation} ${ICON.durationMs}ms ease forwards`
                  : null,
              },
            }}
          />
        </button>
        {isCounterVisible && <div sx={style.counter}>{totalClaps}</div>}
      </div>
    </ThemeProvider>
  );
};
