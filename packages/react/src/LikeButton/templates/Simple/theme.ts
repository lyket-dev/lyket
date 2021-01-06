export default {
  buttons: {
    inactive: {
      backgroundColor: 'background',
      svg: {
        fill: 'text',
      },
    },
    active: {
      transition: 'all 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms',
      backgroundColor: 'primary',
    },
  },
};
