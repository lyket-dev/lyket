/* @jsx jsx */

import { FC } from 'react';
import { jsx } from 'theme-ui';
import { LikeButtonThemeComponentProps } from '../..';
import { ThumbUpIcon } from './icons/ThumbUpIcon';
import { style } from './style';
import { ThemeProvider } from 'theme-ui';
import theme from './theme';

export const Simple: FC<LikeButtonThemeComponentProps> = ({
  isLoading,
  userLiked,
  totalLikes,
  onClick,
  isCounterVisible,
}) => {
  return isLoading ? (
    <span>Loading...</span>
  ) : (
    <ThemeProvider theme={theme}>
      <div sx={style.root}>
        <button
          onClick={onClick}
          sx={{
            boxShadow: 'none',
            padding: '1em 1.2em',
            textAlign: 'center',
            transitionProperty: 'none',
            color: '#616161',
            background: 'none',
            border: 'none',
            outline: 'none',
            cursor: 'pointer',
            borderRadius: '.25em',
            variant: userLiked ? 'buttons.active' : 'buttons.primary',
            bg: '#e0e0e0',
            transition: 'all 0.2s ease-in-out',
            '@media (hover: hover)': {
              ':hover': {
                transition: 'all 0.2s ease-in-out',
                svg: {
                  fill: '#292929',
                },
              },
            },
          }}
        >
          <ThumbUpIcon sx={style.icon} />
        </button>
        {isCounterVisible && <span sx={style.counter}>{totalLikes}</span>}
      </div>
    </ThemeProvider>
  );
};
