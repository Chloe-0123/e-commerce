import React from 'react';
import Flickity from 'react-flickity-component';
import '../styles/flickity.css';


const ShopByRoomPage = () => {
  const flickityOptions = {
    initialIndex: 2,
    wrapAround: true,
    cellSpacing: 10, // Set the desired spacing between images
  };

  return (
    <>
      <h1>Shop by Room</h1>

      <Flickity
        className="carousel"
        elementType="div"
        options={flickityOptions}
        disableImagesLoaded={false}
        reloadOnUpdate
        static
      >
        <a href="#" className="carousel-cell">
          <img src="https://place-puppy.com/500x300" alt="Puppy 1" />
        </a>
        <a href="#" className="carousel-cell">
          <img src="https://place-puppy.com/500x300" alt="Puppy 2" />
        </a>
        <a href="#" className="carousel-cell">
          <img src="https://place-puppy.com/500x300" alt="Puppy 3" />
        </a>
        <a href="#" className="carousel-cell">
          <img src="https://place-puppy.com/500x300" alt="Puppy 4" />
        </a>
        <a href="#" className="carousel-cell">
          <img src="https://place-puppy.com/500x300" alt="Puppy 5" />
        </a>
      </Flickity>
    </>
  );
};

export default ShopByRoomPage;
