import React, { useState, CSSProperties, useEffect } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import '../styles/productCarousel.css'
import { FreeMode, Navigation, Thumbs } from "swiper";
import Image from 'next/image';
import SwiperType from 'swiper'


interface CarouselProps {
  image_location: string
  name: string
}

export const PCarousel = ({ image_location , name }: CarouselProps) => {


  const [thumbsSwiper, setThumbsSwiper] = useState<SwiperType>();
  const [carouselData, setCarouselData] = useState(null)




  return (
    <>

      <Swiper 
      style={{
        "--swiper-navigation-color": "#fff",
        "--swiper-pagination-color": "#fff",

        
      } as CSSProperties}
        spaceBetween={10}
        navigation={false}
        thumbs={{ swiper: thumbsSwiper }}
        modules={[FreeMode, Navigation, Thumbs]}
        className="mySwiper2"
      >
      <SwiperSlide>
        <Image src={`/${image_location}`} alt={`${name}`} width={500} height={500 * (9/16)} style={{ objectFit: "cover" }}></Image>
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://swiperjs.com/demos/images/nature-7.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://swiperjs.com/demos/images/nature-3.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://swiperjs.com/demos/images/nature-4.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://swiperjs.com/demos/images/nature-5.jpg" />
        </SwiperSlide>
       
      </Swiper>

      <Swiper
        style={{"width": "70%"} as CSSProperties}
        onSwiper={setThumbsSwiper}
        spaceBetween={10}
        slidesPerView={5}
        freeMode={true}
        watchSlidesProgress={true}
        modules={[FreeMode, Navigation, Thumbs]}
        className="mySwiper"
      >
        <SwiperSlide>
        <Image src={`/${image_location}`} alt={`${name}`} width={500} height={500 * (9/16)} style={{ objectFit: "cover" }}></Image>
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://swiperjs.com/demos/images/nature-7.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://swiperjs.com/demos/images/nature-3.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://swiperjs.com/demos/images/nature-4.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://swiperjs.com/demos/images/nature-5.jpg" />
        </SwiperSlide>
       
      </Swiper>


    </>



  )
}