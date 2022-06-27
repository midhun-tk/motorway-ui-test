import React from 'react';
import ReactDOM from 'react-dom';

import useStyles from './styles';

function Modal({ closeModal, data }) {
  const classes = useStyles();

  const modal = (
    <>
      <div className={classes.overlay} onClick={closeModal} />
      <div className={classes.modal}>
        <button onClick={closeModal}>X</button>
        <img
          className={classes.cardImage}
          src={`${data.url}.webp`}
          alt={data.alt_description}
        />
      </div>
    </>
  );
  return ReactDOM.createPortal(modal, document.getElementById('modal'));
}

export default Modal;
