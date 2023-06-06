import React from 'react'
import Header from '@/components/header'
import { MainPic } from '@/components/MainPic';
import Footer from '@/components/Footer';
import ShopTheCollectionButton from '@/components/Button';

const Services = () => {
  return (

    <>
      <Header />
      <MainPic url='img/mainPage.jpg' text={true}/>
      <div>
        <p>A modern alternative to the custom workroom. Realize your design vision with bespoke customizations to our collection—each piece tailor-made for your project.</p>
        <ShopTheCollectionButton path="#" inquire='INQUIRE'/>
      </div>
      <div className="tw-bg-[rgb(250,249,247)]">
        <div className="texts">
          <h6>BY THE INCH CUSTOMIZATION</h6>
          <p>Design to the inch with custom widths or extended depths on most pieces, or define cushion configuration to your specification.</p>
        </div>
        <div className="texts">
          <h6>CUSTOMER`S OWN MATERIAL</h6>
          <p>Upholster with your choice of fabric or leather, or design with mixed materials for the seat, back, or frame for a one-of-a-kind piece.</p>
        </div>
        <div className="texts">
          <h6>TAILORED ADDITIONS</h6>
          <p>Complement your piece with tailor-made finishing touches—from additional throw pillows to fabric by the yard.</p>
        </div>

      </div>
      <Footer />
    </>
    
  )
}

export default Services