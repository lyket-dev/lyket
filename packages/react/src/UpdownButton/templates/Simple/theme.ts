export default {
  buttons: {
    upInactive: {
      backgroundColor: 'background',
      svg: {
        fill: 'text',
      },
    },
    upActive: {
      backgroundColor: 'primary',
      transition: 'all 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms',
    },
    downInactive: {
      backgroundColor: 'background',
      svg: {
        fill: 'text',
      },
    },
    downActive: {
      transition: 'all 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms',
      backgroundColor: 'secondary',
    },
  },
};
