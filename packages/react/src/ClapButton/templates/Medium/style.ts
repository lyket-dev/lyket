import { ThemeUIStyleObject } from 'theme-ui';

export const style: Record<string, ThemeUIStyleObject> = {
  root: {
    color: 'inherit',
    fontFamily: 'inherit',
    display: 'inline-flex',
    alignItems: 'center',
  },
  counter: {
    ml: '.6em',
    fontFamily: 'body',
  },
  icon: {
    height: '2em',
    fill: theme => theme.rawColors?.icon,
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
        transition: 'all 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms',
        opacity: 0.65,
      },
      ':active': {
        svg: {
          transition: 'all 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms',
          transform: 'scale(0.9)',
        },
      },
    },
  },
  baloon: {
    opacity: '0',
    position: 'absolute',
    fontFamily: 'inherit',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    color: 'white',
    backgroundColor: '#292929',
    borderRadius: '100%',
    fontSize: '.7em',
    height: '2.4em',
    width: '2.4em',
    top: '-1.2em',
    left: '-1.2em',
    '@media (hover: hover)': {
      ':hover': {
        opacity: '1',
      },
    },
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
