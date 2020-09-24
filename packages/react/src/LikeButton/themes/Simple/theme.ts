import { alpha } from '@theme-ui/color';

export default {
  buttons: {
    inactive: {
      backgroundColor: 'background',
      svg: {
        fill: 'text',
      },
    },
    active: {
      backgroundColor: alpha('primary', 0.2),
      svg: {
        fill: 'primary',
      },
    },
  },
};
