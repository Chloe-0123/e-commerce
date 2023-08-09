import React, {useEffect, useState} from 'react';
import Flickity from 'react-flickity-component';
import '../styles/flickity.css';
import Header from '../components/header'
import { ShopTheCollectionButton } from '@/components/Button';
import Footer from '@/components/Footer';
import { MainPic } from '@/components/MainPic';
import Image from 'next/image';


const ShopByRoomPage: React.FC = () => {

  const [carouselData, setCarouselData] = useState(null)
  let livingProducts
  let diningProducts
  let bedroomProducts

  useEffect(() => {
    fetch('api/product/getProducts')
      .then((response) => response.json())
      .then((data) => {
        setCarouselData(data)
      })
      .catch((error) => {
        console.error('Error fetching product data:', error);
      })
  }, [])

  console.log('carouselData: ',carouselData)
  if (carouselData) {

    livingProducts = carouselData.filter(data => data.category_id === 1).slice(0,5)
    
    diningProducts = carouselData.filter(data => data.category_id === 2).slice(0,5)
    
    bedroomProducts = carouselData.filter(data => data.category_id === 3).slice(0,5)
    

    console.log('living',livingProducts)
    console.log('dining',diningProducts)
    console.log('bedroom',bedroomProducts)
  }
  


  const flickityOptions = { 
    initialIndex: 2,
    wrapAround: true,
  };

  return (
    <>
    <Header />
      {carouselData && <><MainPic url='img/main.jpg'/>

      <div className='tw-flex tw-justify-center tw-mb-14'>
        <p className='tw-w-[50%] tw-text-[1.5rem] tw-text-center'>Curate your space with carefully selected elements to establish a lasting aesthetic that resonates for years to come. Explore our top home looks for inspiration across various areas.</p>
      </div>
    

      <div className="livingroomtitle tw-mt-32">
        <h2 className='tw-text-[2.3rem] tw-text-center tw-mb-8'>Living Room</h2>
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
        {livingProducts.map((product) => (
          <a key={product.product_id} href={`/product/${product.product_id}`} className='carousel-cell'>
          <div className="tw-h-[300px]">
          <Image src={`/${product.file_location}`} alt={`Product ${product.name}`} width={500} height={300}></Image>
          </div>
          </a>
        ))}
        </Flickity>
        
        <ShopTheCollectionButton path="/living"/>
      </div>
      
      <div className="dini  ngroomtitle">
        <h2 className='tw-text-[2.3rem] tw-text-center tw-mb-8'>Dining Room</h2>
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
        {diningProducts.map((product) => (
          <a key={product.product_id} href={`/product/${product.product_id}`} className='carousel-cell'>
          <div className="tw-h-[300px]">
          <Image src={`/${product.file_location}`} alt={`Product ${product.name}`} width={500} height={300}></Image>
          </div>
          </a>
        ))}
        </Flickity>
          
        <ShopTheCollectionButton path="/dining"/>
      </div>
      
      <div className="bedroomtitle">
        <h2 className='tw-text-[2.3rem] tw-text-center tw-mb-8'>Bedroom</h2>
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
        {bedroomProducts.map((product) => (
          <a key={product.product_id} href={`/product/${product.product_id}`} className='carousel-cell'>
          <div className="tw-h-[300px] tw-w-[500px]">
          <Image src={`/${product.file_location}`} alt={`Product ${product.name}`} width={500} height={500 * (9/16)} style={{ objectFit: "cover" }}></Image>
          </div>
          </a>
        ))}
        </Flickity>
          
        <ShopTheCollectionButton path="/bedroom"/>
      </div></>}
      <Footer />
    </>
  );
};

export default ShopByRoomPage;


