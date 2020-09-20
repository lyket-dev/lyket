/* @jsx jsx */

import { jsx, ThemeProvider } from 'theme-ui';
import { UpdownButtonThemeComponentProps } from '../..';
import { RedditArrow } from './icons/RedditArrow';
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

const ICON = {
  animation: iconScale,
  durationMs: 700,
};

export const Reddit: FC<UpdownButtonThemeComponentProps> = ({
  isLoading,
  userVoteDirection,
  totalScore,
  onPressUp,
  onPressDown,
  isCounterVisible,
}) => {
  const [animationActiveUp, setAnimationActiveUp] = useState<boolean>(false);
  const [animationActiveDown, setAnimationActiveDown] = useState<boolean>(
    false
  );

  const handleClickUp = useCallback(
    (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
      onPressUp(e);

      if (userVoteDirection !== 1) {
        setAnimationActiveUp(true);
        setTimeout(() => setAnimationActiveUp(false), ICON.durationMs);
      }
    },
    [userVoteDirection, onPressUp]
  );

  const handleClickDown = useCallback(
    (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
      onPressDown(e);

      if (userVoteDirection !== -1) {
        setAnimationActiveDown(true);
        setTimeout(() => setAnimationActiveDown(false), ICON.durationMs);
      }
    },
    [userVoteDirection, onPressDown]
  );

  if (isLoading) {
    return <span>Loading...</span>;
  }

  const iconStyleUp = {
    ...style.icon,
    ...{
      animation: animationActiveUp
        ? `${ICON.animation} ${ICON.durationMs}ms ease forwards`
        : null,
    },
  };

  const iconStyleDown = {
    ...style.icon,
    ...{
      animation: animationActiveDown
        ? `${ICON.animation} ${ICON.durationMs}ms ease forwards`
        : null,
    },
  };

  return (
    <ThemeProvider theme={theme}>
      <div sx={style.root}>
        <button
          onClick={handleClickUp}
          sx={{
            ...style.button,
            ...{
              variant:
                userVoteDirection === 1
                  ? 'buttons.upActive'
                  : 'buttons.upInactive',
              '@media (hover: hover)': {
                ':hover': {
                  variant: 'buttons.upActive',
                  transition: 'all 0.2s ease-in-out',
                },
              },
            },
          }}
        >
          <RedditArrow sx={iconStyleUp} />
        </button>
        {isCounterVisible && <div sx={style.counter}>{totalScore}</div>}
        <button
          onClick={handleClickDown}
          sx={{
            ...style.button,
            ...{
              transform: 'rotate(180deg)',
              variant:
                userVoteDirection === -1
                  ? 'buttons.downActive'
                  : 'buttons.downInactive',
              '@media (hover: hover)': {
                ':hover': {
                  variant: 'buttons.downActive',
                  transition: 'all 0.2s ease-in-out',
                },
              },
            },
          }}
        >
          <RedditArrow sx={iconStyleDown} />
        </button>
      </div>
    </ThemeProvider>
  );
};
