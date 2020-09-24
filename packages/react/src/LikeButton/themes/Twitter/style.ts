import { SxStyleProp } from 'theme-ui';

export const style: Record<string, SxStyleProp> = {
  root: {
    color: 'inherit',
    fontFamily: 'inherit',
    display: 'inline-flex',
    alignItems: 'center',
  },
  counter: {
    ml: '.2em',
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
    '@media (hover: hover)': {
      ':hover': {
        transition: 'all 0.2s ease-in-out',
        backgroundColor: '#E5214A20',
      },
    },
  },
  dotsRotContainer: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
  },
  dotsContainer: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%) rotate(165deg)',
  },
  ring: {
    opacity: '0',
    width: `90%`,
    height: `90%`,
    borderRadius: `3em`,
    boxSizing: 'border-box',
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
  },
  icon: {
    height: '2em',
    transition: 'all 0.2s ease-in-out',
    display: 'block',
    margin: '0 auto',
    animationTimingFunction: 'cubic-bezier(0.280, 0.840, 0.420, 1)',
  },
};
