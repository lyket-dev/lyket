import { ThemeUIStyleObject } from '@theme-ui/css';

export const style: Record<string, ThemeUIStyleObject> = {
  root: {
    color: 'inherit',
    fontFamily: 'inherit',
    display: 'inline-flex',
    alignItems: 'center',
  },
  counter: {
    ml: '.5em',
    color: 'text',
    fontFamily: 'body',
  },
  icon: {
    height: '1.6em',
    display: 'block',
    margin: '0 auto',
    fill: 'icon',
  },
  ring: {
    opacity: '0',
    width: `90%`,
    height: `90%`,
    borderRadius: `3em`,
    border: `1px solid`,
    borderColor: 'highlight',
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
    bg: 'background',
    ':hover': {
      transition: 'all 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms',
      opacity: 0.75,
    },
  },
  baloon: {
    opacity: '0',
    position: 'absolute',
    fontFamily: 'body',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    color: 'white',
    backgroundColor: '#292929',
    borderRadius: '100%',
    fontSize: '.7em',
    height: '2.8em',
    width: '2.8em',
    top: '-1.4em',
    left: '-1.4em',
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
