export default {
  buttons: {
    upInactive: {
      backgroundColor: theme => theme.rawColors?.background,
    },
    upActive: {
      backgroundColor: theme => theme.rawColors?.primary,
      transition: 'all 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms',
    },
    downInactive: {
      backgroundColor: theme => theme.rawColors?.background,
    },
    downActive: {
      transition: 'all 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms',
      backgroundColor: theme => theme.rawColors?.secondary,
    },
  },
};
