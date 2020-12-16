/* @jsx jsx */

import { jsx, ThemeProvider } from 'theme-ui';
import { LikeButtonTemplateComponentProps } from '../..';
import { ThumbIcon } from './icons/ThumbIcon';
import { keyframes } from '@emotion/core';
import { FC, useCallback, useState } from 'react';
import { style } from './style';
import theme from './theme';

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

const RING = {
  durationMs: 600,
  animation: ringScale,
};

const ICON = {
  animation: iconScale,
  durationMs: 700,
};

export const Simple: FC<LikeButtonTemplateComponentProps> = ({
  isLoading,
  userLiked,
  totalLikes,
  handlePress,
  isCounterVisible,
}) => {
  const [animationActive, setAnimationActive] = useState<boolean>(false);

  const handleClick = useCallback(
    (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
      handlePress(e);

      if (!userLiked) {
        setAnimationActive(true);
        setTimeout(() => setAnimationActive(false), ICON.durationMs);
      }
    },
    [userLiked, handlePress]
  );

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

  return (
    <ThemeProvider theme={theme}>
      <div sx={style.root}>
        <button
          onClick={handleClick}
          disabled={isLoading}
          sx={{
            ...style.button,
            ...{
              variant: userLiked ? 'buttons.active' : 'buttons.inactive',
              '@media (hover: hover)': {
                ':hover': {
                  variant: 'buttons.active',
                },
              },
            },
          }}
        >
          <div sx={ringStyle} />
          <ThumbIcon sx={iconStyle} />
        </button>
        {isCounterVisible && <div sx={style.counter}>{totalLikes}</div>}
      </div>
    </ThemeProvider>
  );
};
