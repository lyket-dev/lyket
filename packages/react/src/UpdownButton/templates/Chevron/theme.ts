export default {
  buttons: {
    upInactive: {
      backgroundColor: 'background',
    },
    upActive: {
      backgroundColor: 'primary',
      transition: 'all 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms',
    },
    downInactive: {
      backgroundColor: 'background',
    },
    downActive: {
      transition: 'all 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms',
      backgroundColor: 'secondary',
    },
  },
};
