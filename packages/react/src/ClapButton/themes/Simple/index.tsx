/* @jsx jsx */

import { FC } from 'react';
import { jsx } from 'theme-ui';
import { ClapButtonThemeComponentProps } from '../..';
import { ClapIcon } from './icons/ClapIcon';
import { style } from './style';

export const Simple: FC<ClapButtonThemeComponentProps> = ({
  isLoading,
  userClaps,
  totalClaps,
  onClick,
  isCounterVisible,
}) => {
  return isLoading ? (
    <span>Loading...</span>
  ) : (
    <div sx={style.root}>
      <button onClick={onClick} sx={style.button}>
        <ClapIcon sx={style.icon} />
        <div sx={style.amount}>{userClaps}</div>
      </button>
      {isCounterVisible && <span sx={style.counter}>{totalClaps}</span>}
    </div>
  );
};
