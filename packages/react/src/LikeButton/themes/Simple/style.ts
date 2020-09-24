import { SxStyleProp } from 'theme-ui';

export const style: Record<string, SxStyleProp> = {
  root: {
    color: 'inherit',
    fontFamily: 'inherit',
    display: 'inline-flex',
    alignItems: 'center',
  },
  counter: {
    ml: '.5em',
  },
  icon: {
    height: '1em',
    transition: 'all 0.2s ease-in-out',
    display: 'block',
    margin: '0 auto',
    animationTimingFunction: 'cubic-bezier(0.280, 0.840, 0.420, 1)',
    fill: '#292929',
  },
  ring: {
    opacity: '0',
    width: `90%`,
    height: `90%`,
    borderRadius: `3em`,
    border: `1px solid #e095ed`,
    boxSizing: 'border-box',
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
  },
  button: {
    border: 'none',
    outline: 'none',
    cursor: 'pointer',
    background: 'transparent',
    appearance: 'none',
    position: 'relative',
    fontSize: 'inherit',
    borderRadius: '100%',
    transition: 'all 0.2s ease-in-out',
    width: '3em',
    height: '3em',
    padding: '0',
    lineHeight: '1em',
  },
};
