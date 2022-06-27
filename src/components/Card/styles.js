import { createUseStyles } from 'react-jss';

export default createUseStyles({
  card: {
    boxShadow: '0px 0px 10px #aaa',
    borderRadius: 8,
    cursor: 'pointer',
    position: 'relative',

    '@media ( min-width: 576px )': {
      height: 250,
    },

    '&:hover': {
      '& $cardImage': {
        transform: 'scale(1.15)',
      },
    },
  },
  cardImage: {
    borderRadius: 8,
    width: '100%',
    transformOrigin: '50% 65%',
    transition: 'transform 2s',

    '@media ( min-width: 576px )': {
      height: 250,
      width: 'auto',
    },
  },
  imageWrapper: {
    backgroundColor: '#000',
    borderRadius: '8px',
    height: '100%',
    overflow: 'hidden',
    width: '100%',
  },
  avatar: {
    backgroundImage: (props) => `url(${props.avatar}.webp)`,
    backgroundSize: 'cover',
    borderRadius: '4px',
    border: '2px solid #fff',
    height: 25,
    position: 'absolute',
    right: 10,
    bottom: 10,
    width: 25,
  },
  likes: {
    bottom: 10,
    color: '#fff',
    fontSize: '.8rem',
    left: 10,
    position: 'absolute',
  },
  icon: {
    height: '.7em',
    marginRight: 5,
    verticalAlign: 0,
  },
});
