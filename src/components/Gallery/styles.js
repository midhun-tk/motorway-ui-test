import { createUseStyles } from 'react-jss';

export default createUseStyles({
  gallery: {
    display: 'flex',
    flexDirection: 'column',
    rowGap: '20px',
    margin: '100px auto',

    '@media ( min-width: 576px )': {
      flexDirection: 'row',
      flexWrap: 'wrap',
      gap: '20px',
      justifyContent: 'center',
      maxWidth: 1440,
    },
  },
});
