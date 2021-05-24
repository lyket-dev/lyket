/** @jsxRuntime classic */
/* @jsx jsx */

import { jsx, ThemeProvider } from 'theme-ui';
import { UpdownButtonTemplateComponentProps } from '../..';
import { RedditArrow } from './icons/RedditArrow';
import { keyframes } from '@emotion/react';
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

export const Reddit: FC<UpdownButtonTemplateComponentProps> = ({
  isLoading,
  userVoteDirection,
  totalScore,
  handlePressUp,
  handlePressDown,
  isCounterVisible,
}) => {
  const [animationActiveUp, setAnimationActiveUp] = useState<boolean>(false);
  const [animationActiveDown, setAnimationActiveDown] = useState<boolean>(
    false
  );

  const handleClickUp = useCallback(
    (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
      handlePressUp(e);

      if (userVoteDirection !== 1) {
        setAnimationActiveUp(true);
        setTimeout(() => setAnimationActiveUp(false), ICON.durationMs);
      }
    },
    [userVoteDirection, handlePressUp]
  );

  const handleClickDown = useCallback(
    (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
      handlePressDown(e);

      if (userVoteDirection !== -1) {
        setAnimationActiveDown(true);
        setTimeout(() => setAnimationActiveDown(false), ICON.durationMs);
      }
    },
    [userVoteDirection, handlePressDown]
  );

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
          disabled={isLoading}
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
                  transition: 'all 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms',
                },
              },
            },
          }}
        >
          <RedditArrow sx={iconStyleUp} />
        </button>
        {isCounterVisible && <div sx={style.counter}>{totalScore}</div>}
        {isLoading && <div sx={style.counter}>-</div>}
        <button
          onClick={handleClickDown}
          disabled={isLoading}
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
                  transition: 'all 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms',
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
