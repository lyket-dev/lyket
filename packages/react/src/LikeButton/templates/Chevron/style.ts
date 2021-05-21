import { ThemeUIStyleObject } from '@theme-ui/css';

export const style: Record<string, ThemeUIStyleObject> = {
  root: {
    color: 'inherit',
    fontFamily: 'inherit',
    display: 'inline-flex',
    alignItems: 'center',
  },
  counter: {
    color: theme => theme.rawColors?.text,
    fontFamily: 'body',
    mt: '.2em',
  },
  icon: {
    height: '0.8em',
    display: 'block',
    margin: '0 auto',
    fill: theme => theme.rawColors?.icon,
  },
  iconContainer: {
    transform: 'rotate(180deg)',
  },
  ring: {
    opacity: '0',
    width: `90%`,
    height: `90%`,
    borderRadius: `3em`,
    border: `1px solid`,
    borderColor: theme => theme.rawColors?.highlight,
    boxSizing: 'border-box',
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
  },
  button: {
    border: 'none',
    outline: 'none',
    boxShadow: '0 0 0',
    transform: 'translate3d(0,0,0)',
    cursor: 'pointer',
    appearance: 'none',
    position: 'relative',
    fontSize: 'inherit',
    borderRadius: '100%',
    transition: 'all 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms',
    width: '3em',
    height: '3em',
    padding: '0',
    lineHeight: '1em',
    bg: theme => theme.rawColors?.background,
    ':hover': {
      transition: 'all 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms',
      opacity: 0.75,
    },
  },
};
