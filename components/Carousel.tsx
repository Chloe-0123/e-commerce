import React from 'react';
import Flickity from 'react-flickity-component';
import styles from '../styles/carousel.module.css';

const Carousel = () => {
  const flickityOptions = {
    initialIndex: 2,
    wrapAround: true,
    
  };

  return (
    <>
      <Flickity
        className={styles.carousel}
        elementType="div"
        options={flickityOptions}
        disableImagesLoaded={false}
        reloadOnUpdate
        static
      >
        <a href="#" className={styles['carousel-cell']}>
          <img src="https://place-puppy.com/800x800" alt="Puppy 1" />
        </a>
        <a href="#" className={styles['carousel-cell']}>
          <img src="https://place-puppy.com/500x300" alt="Puppy 2" />
        </a>
        <a href="#" className={styles['carousel-cell']}>
          <img src="https://place-puppy.com/500x300" alt="Puppy 3" />
        </a>
        <a href="#" className={styles['carousel-cell']}>
          <img src="https://place-puppy.com/500x300" alt="Puppy 4" />
        </a>
        <a href="#" className={styles['carousel-cell']}>
          <img src="https://place-puppy.com/500x300" alt="Puppy 5" />
        </a>
      </Flickity>
    </>
  );
};

export default Carousel;
