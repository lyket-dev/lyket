import { alpha } from '@theme-ui/color';

export default {
  buttons: {
    upInactive: {
      backgroundColor: 'background',
      svg: {
        fill: 'text',
      },
    },
    upActive: {
      backgroundColor: alpha('primary', 0.2),
      svg: {
        fill: 'primary',
      },
    },
    downInactive: {
      backgroundColor: 'background',
      svg: {
        fill: 'text',
      },
    },
    downActive: {
      backgroundColor: alpha('secondary', 0.2),
      svg: {
        fill: 'secondary',
      },
    },
  },
};
