import React from 'react'
import Header from '@/components/header'
import Footer from '@/components/Footer';
import { MainPic } from '@/components/MainPic';
import { PageIntro } from '@/components/PageIntro';
import { VerticalCard } from '@/components/VerticalCard';
import { Product } from '@/components/Product';


const Dining = () => {
  return (
    <>
    <Header />
    <MainPic url='img/mainPage.jpg'/>
    <PageIntro title="Dining" p="Timeless shapes designed with luxe detail, handcrafted to order for unparalleled comfort and longevity."/>
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

export default Dining