import React from 'react';
import Flickity from 'react-flickity-component';
import '../styles/flickity.css';
import Header from '../components/header'
import ShopTheCollectionButton from '@/components/Button';
import Footer from '@/components/Footer';
import { MainPic } from '@/components/MainPic';

const ShopByRoomPage: React.FC = () => {
  const flickityOptions = {
    initialIndex: 2,
    wrapAround: true,
  };

  return (
    <>
      <Header />
      <MainPic url='img/mainPage.jpg'/>

      <p>Designing a room with thoughtfully curated pieces sets the tone for a completed look you’ll love for years to come. Discover our favorite looks across the home to inspire your space.</p>

      <p>__________</p>

      <div className="livingroomtitle">
        <h2>Living Room</h2>
      </div>
      <div className="livingRoom tw-h-[638px]">
        <Flickity
          className="carousel"
          elementType="div"
          options={flickityOptions}
          disableImagesLoaded={false}
          reloadOnUpdate
          static
        >
          <a href="#" className='carousel-cell'>
            <img src="https://place-puppy.com/500x300" alt="Puppy 1" />
          </a>
          <a href="#" className='carousel-cell'>
            <img src="https://place-puppy.com/500x300" alt="Puppy 2" />
          </a>
          <a href="#" className='carousel-cell'>
            <img src="https://place-puppy.com/500x300" alt="Puppy 3" />
          </a>
          <a href="#" className='carousel-cell'>
            <img src="https://place-puppy.com/500x300" alt="Puppy 4" />
          </a>
          <a href="#" className='carousel-cell'>
            <img src="https://place-puppy.com/500x300" alt="Puppy 5" />
          </a>
        </Flickity>
        
        <ShopTheCollectionButton path="/living"/>
      </div>
      
      <div className="dini  ngroomtitle">
        <h2>Dining Room</h2>
      </div>
      <div className="diningRoom tw-h-[638px]">
        <Flickity
          className="carousel"
          elementType="div"
          options={flickityOptions}
          disableImagesLoaded={false}
          reloadOnUpdate
          static
        >
          <a href="#" className='carousel-cell'>
            <img src="https://place-puppy.com/500x300" alt="Puppy 1" />
          </a>
          <a href="#" className='carousel-cell'>
            <img src="https://place-puppy.com/500x300" alt="Puppy 2" />
          </a>
          <a href="#" className='carousel-cell'>
            <img src="https://place-puppy.com/500x300" alt="Puppy 3" />
          </a>
          <a href="#" className='carousel-cell'>
            <img src="https://place-puppy.com/500x300" alt="Puppy 4" />
          </a>
          <a href="#" className='carousel-cell'>
            <img src="https://place-puppy.com/500x300" alt="Puppy 5" />
          </a>
        </Flickity>
          
        <ShopTheCollectionButton path="/dining"/>
      </div>
      
      <div className="bedroomtitle">
        <h2>Bedroom</h2>
      </div>
      <div className="bedRoom tw-h-[638px]">
        <Flickity
          className="carousel"
          elementType="div"
          options={flickityOptions}
          disableImagesLoaded={false}
          reloadOnUpdate
          static
        >
          <a href="#" className='carousel-cell'>
            <img src="https://place-puppy.com/500x300" alt="Puppy 1" />
          </a>
          <a href="#" className='carousel-cell'>
            <img src="https://place-puppy.com/500x300" alt="Puppy 2" />
          </a>
          <a href="#" className='carousel-cell'>
            <img src="https://place-puppy.com/500x300" alt="Puppy 3" />
          </a>
          <a href="#" className='carousel-cell'>
            <img src="https://place-puppy.com/500x300" alt="Puppy 4" />
          </a>
          <a href="#" className='carousel-cell'>
            <img src="https://place-puppy.com/500x300" alt="Puppy 5" />
          </a>
        </Flickity>
          
        <ShopTheCollectionButton path="/bedroom"/>
      </div>
      <Footer />
    </>
  );
};

export default ShopByRoomPage;


