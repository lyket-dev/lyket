import { ThemeUIStyleObject } from 'theme-ui';

export const style: Record<string, ThemeUIStyleObject> = {
  root: {
    color: 'inherit',
    display: 'inline-flex',
    alignItems: 'center',
  },
  counter: {
    ml: '.4em',
    fontFamily: 'body',
    color: theme => theme.rawColors?.text,
  },
  icon: {
    height: '2.2em',
    transition: 'all 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms',
  },
  button: {
    border: 'none',
    outline: 'none',
    cursor: 'pointer',
    background: 'transparent',
    appearance: 'none',
    position: 'relative',
    fontSize: 'inherit',
    p: 0,
    '@media (hover: hover)': {
      ':hover': {
        svg: {
          transition: 'all 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms',
          transform: 'scale(1.05)',
        },
      },
      ':active': {
        svg: {
          transition: 'all 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms',
          transform: 'scale(1)',
        },
      },
    },
  },
  baloon: {
    opacity: '0',
    position: 'absolute',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    color: 'white',
    backgroundColor: '#292929',
    fontFamily: 'body',
    borderRadius: '100%',
    fontSize: '.6em',
    height: '2.4em',
    width: '2.4em',
    top: '-1.2em',
    left: '-1.2em',
  },
  centeredContainer: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
  },
  buttonContainer: {
    position: 'relative',
  },
};
