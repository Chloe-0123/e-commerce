import React from 'react'
import Header from '@/components/header'
import Footer from '@/components/Footer';
import { MainPic } from '@/components/MainPic';
import { PageIntro } from '@/components/PageIntro';
import { VerticalCard } from '@/components/VerticalCard';
import { Product } from '@/components/Product';

const Bedroom = () => {
  return (
    <>
    <Header />
    <MainPic url='img/mainPage.jpg'/>
    <div className="tw-h-screen">
      <PageIntro title="The Living Room Collection" p="Timeless shapes designed with luxe detail, handcrafted to order for unparalleled comfort and longevity."/>
      <div className="cards tw-flex tw-gap-x-12 tw-h-fit tw-justify-center tw-mt-20">
          <VerticalCard imgSrc='img/cozyLivingRoom.jpg' imgDesc='Shop Sofas'/>
          <VerticalCard imgSrc='img/accent.jpg' imgDesc='Shop Tables'/>
          <VerticalCard imgSrc='img/chair.jpg' imgDesc='Shop Chairs'/>
      </div>
    </div>
    <div className="products tw-w-screen tw-flex tw-flex-wrap tw-gap-8 tw-justify-center">
      <Product url="img/greycouch.jpg" name="The Grey Couch" price={130}/>
      <Product url="img/greycouch.jpg" name="The Grey Couch" price={130}/>
      <Product url="img/greycouch.jpg" name="The Grey Couch" price={130}/>
      <Product url="img/greycouch.jpg" name="The Grey Couch" price={130}/>

    </div>
    <Footer />
    
    </>
  )
}

export default Bedroom