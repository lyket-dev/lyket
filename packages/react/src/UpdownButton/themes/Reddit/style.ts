import { SxStyleProp } from 'theme-ui';

export const style: Record<string, SxStyleProp> = {
  root: {
    color: 'inherit',
    fontFamily: 'inherit',
    display: 'inline-flex',
    alignItems: 'center',
    flexDirection: 'column',
  },
  counter: {
    mt: '.2em',
    mb: '.2em',
    minWidth: '2em',
    textAlign: 'center',
  },
  icon: {
    height: '1em',
    transition: 'all 0.2s ease-in-out',
    display: 'block',
    margin: '0 auto',
    animationTimingFunction: 'cubic-bezier(0.280, 0.840, 0.420, 1)',
  },
  button: {
    border: 'none',
    outline: 'none',
    cursor: 'pointer',
    background: 'transparent',
    appearance: 'none',
    position: 'relative',
    fontSize: 'inherit',
    borderRadius: '3px',
    transition: 'all 0.2s ease-in-out',
    width: '2em',
    height: '2em',
    padding: '0',
    lineHeight: '1em',
  },
};
