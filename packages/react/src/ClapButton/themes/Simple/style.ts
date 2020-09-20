import { SxStyleProp } from 'theme-ui';

export const style: Record<string, SxStyleProp> = {
  root: {
    color: 'inherit',
    fontFamily: 'inherit',
    display: 'inline-flex',
    alignItems: 'center',
    fontSize: 'inherit',
  },
  counter: {
    marginLeft: '1em',
  },
  icon: {
    height: '3em',
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
          transition: 'all 0.2s ease-in-out',
          transform: 'scale(1.1)',
        },
        div: {
          opacity: 1,
        },
      },
    },
  },
  amount: {
    opacity: 0,
    fontSize: '.8em',
    height: '2em',
    width: '2em',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    top: '-1em',
    right: '-1em',
    backgroundColor: '#E5214A',
    color: 'white',
    borderRadius: '100%',
    transition: 'all 0.2s ease-in-out',
  },
};
