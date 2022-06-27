import React, { useEffect, useState } from 'react';
import Card from '../Card';
import Modal from '../Modal';

import useStyles from './styles';

const Gallery = () => {
  const [images, setImages] = useState();

  useEffect(() => {
    fetch('/images?limit=10')
      .then((res) => res.json())
      .then((data) => {
        console.log('Success:', data);
        setImages(data);
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  }, []);

  const classes = useStyles();

  const [show, setShow] = useState(false);
  const [modalData, setModalData] = useState({});

  const openModal = (data) => {
    setShow(true);
    setModalData(data);
  };

  const closeModal = () => setShow(false);

  return (
    <>
      <div className={classes.gallery}>
        {images &&
          images.map((img) => (
            <Card
              openModal={(data) => openModal(data)}
              data={img}
              key={img.id}
            />
          ))}
      </div>
      {show && <Modal closeModal={closeModal} data={modalData} />}
    </>
  );
};

export default Gallery;
