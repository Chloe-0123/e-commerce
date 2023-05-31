import React, { useEffect } from 'react';
import Flickity from 'react-flickity-component'
import "../styles/flickity.css";


const ShopByRoomPage: React.FC = () => {


  const flickityOptions = {
    initialIndex: 2
}
  return (
    <>
      <h1>Shop by Room</h1>

      <Flickity
      className={'carousel'} // default ''
      elementType={'div'} // default 'div'
      options={flickityOptions} // takes flickity options {}
      disableImagesLoaded={false} // default false
      reloadOnUpdate // default false
      static // default false
    >

    
    <a href="#"><img src="https://place-puppy.com/500x300"/></a>
    
    <a href="#"><img src="https://place-puppy.com/500x300"/></a>
    
    <a href="#"><img src="https://place-puppy.com/500x300"/></a>
    
    <a href="#"><img src="https://place-puppy.com/500x300"/></a>
   
    <a href="#"><img src="https://place-puppy.com/500x300"/></a>

      

    </Flickity>
    </>
  );
};

export default ShopByRoomPage;
