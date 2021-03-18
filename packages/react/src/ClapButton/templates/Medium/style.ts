export const style: Record<string, any> = {
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
    fill: 'icon',
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
    transition: 'all 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms',
    fontFamily: 'inherit',
    fontSize: '.7em',
    height: '2em',
    width: '2em',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    color: 'white',
    backgroundColor: '#292929',
    borderRadius: '100%',
    top: '-1em',
    left: '-1em',
  },
  centeredContainer: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
  },
};
