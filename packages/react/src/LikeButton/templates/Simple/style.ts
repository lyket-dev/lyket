export const style: Record<string, any> = {
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
    fontWeight: 'body',
  },
  icon: {
    height: '1em',
    display: 'block',
    margin: '0 auto',
    fill: 'text',
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
    cursor: 'pointer',
    bg: 'background',
    appearance: 'none',
    position: 'relative',
    fontSize: 'inherit',
    borderRadius: '100%',
    transition: 'all 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms',
    width: '3em',
    height: '3em',
    padding: '0',
    lineHeight: '1em',
    ':hover': {
      transition: 'all 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms',
      opacity: 0.8,
    },
  },
};
