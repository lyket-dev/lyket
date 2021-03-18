export const style: Record<string, any> = {
  root: {
    color: 'inherit',
    display: 'inline-flex',
    alignItems: 'center',
  },
  counter: {
    ml: '.4em',
    fontFamily: 'body',
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
          transform: 'scale(1.1)',
        },
      },
      ':active': {
        svg: {
          transition: 'all 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms',
          transform: 'scale(1.1)',
        },
      },
    },
  },
  baloon: {
    opacity: '0',
    position: 'absolute',
    transition: 'all 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms',
    fontSize: '.8em',
    height: '3.4em',
    width: '3.4em',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    color: 'white',
    backgroundColor: 'secondary',
    fontFamily: 'body',
    borderRadius: '100%',
    top: '-3em',
    left: '-1.7em',
  },
  centeredContainer: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
  },
};
