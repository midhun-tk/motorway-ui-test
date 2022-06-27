import { createUseStyles } from 'react-jss';

export default createUseStyles({
  '@global #modal': {
    position: 'absolute',
    top: '50%',
    left: '50%',
  },

  overlay: {
    position: 'fixed',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    background: '#000000',
    opacity: 0.7,
    transition: 'opacity 0.2s ease',
  },

  modal: {
    width: 600,
    margin: '0px auto',
    padding: 10,
    backgroundColor: '#fff',
    borderRadius: 2,
    transform: 'translate(-50%, -50%)',
    boxShadow: '0 2px 8px 3px',

    '& $button': {
      position: 'absolute',
      right: '-1rem',
      top: '-1rem',
      width: '2rem',
      height: '2rem',
      padding: '0.5rem',
      margin: '0 auto',
      borderRadius: '50%',
      boxShadow: '1px 1px 1px #0000003a',
      cursor: 'pointer',
      border: '1px solid rgba(0, 0, 0, 0.562)',
    },

    '& img': {
      width: '100%',
    },
  },
});
