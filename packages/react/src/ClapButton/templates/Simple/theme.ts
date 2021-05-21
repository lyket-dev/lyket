export default {
  buttons: {
    inactive: {
      transition: 'all 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms',
      backgroundColor: theme => theme.rawColors?.background,
    },
    active: {
      backgroundColor: theme => theme.rawColors?.primary,
    },
  },
};
