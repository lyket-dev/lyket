const theme: Record<string, any> = {
  buttons: {
    inactive: {
      bg: theme => theme.rawColors?.background,
    },
    active: {
      transition: 'all 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms',
      bg: theme => theme.rawColors?.primary,
    },
  },
};

export default theme;
