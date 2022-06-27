import React, { useState } from 'react';
import { faThumbsUp } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import useWindowSize from '../../hooks/useWindowSize';

import useStyles from './styles';

const Card = ({ data, openModal }) => {
  const windowSize = useWindowSize();
  const [loading, setLoading] = useState(true);
  const [cell, setCell] = useState('');

  const classes = useStyles({
    color: data.color,
    avatar: data.user.profile_image,
  });

  const imgLoad = ({ target: img }) => {
    setCell(() =>
      img.naturalHeight > img.naturalWidth ? 'portrait' : 'landscape'
    );
    setLoading(false);
  };

  return (
    <div
      className={[classes.card, cell].join(' ')}
      onClick={() => (windowSize.width > 576 ? openModal(data) : null)}
    >
      <div className={classes.imageWrapper}>
        <img
          className={classes.cardImage}
          src={`${data.url}.webp`}
          alt={data.alt_description}
          onLoad={imgLoad}
        />
      </div>
      {!loading && (
        <>
          <div className={classes.avatar} />
          <div className={classes.likes}>
            <FontAwesomeIcon icon={faThumbsUp} className={classes.icon} />
            {data.likes}
          </div>
        </>
      )}
    </div>
  );
};

export default Card;
