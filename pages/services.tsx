import React from 'react'
import Header from '@/components/header'
import { MainPic } from '@/components/MainPic';
import Footer from '@/components/Footer';
import { ShopTheCollectionButton } from '@/components/Button';
import { Textbox } from '@/components/Textbox';
import { useEffect } from 'react';

const Services = () => {

  /*useEffect(() => {
    
      fetch(`/api/product/getOneProduct`)
        .then((response) => response.json())
        .then((data) => {
          console.log('Fetch response:', data);
        })
        .catch((error) => {
          console.log('Error fetching product data 1:', error);
        });
    }
  , []);*/


  return (

    <>
      <Header />
      <MainPic url='img/mainPage.jpg' text={true}/>
      <div>
        <p>A modern alternative to the custom workroom. Realize your design vision with bespoke customizations to our collection—each piece tailor-made for your project.</p>
        <ShopTheCollectionButton path="#" inquire='INQUIRE'/>
      </div>
      <div className="tw-bg-[rgb(250,249,247)] tw-flex tw-justify-center tw-gap-36 tw-py-32">
        <div className="tw-w-1/6 tw-text-center">
          <h6>BY THE INCH CUSTOMIZATION</h6>
          <p>Design to the inch with custom widths or extended depths on most pieces, or define cushion configuration to your specification.</p>
        </div>
        <div className="tw-w-1/6 tw-text-center">
          <h6>CUSTOMER`S OWN MATERIAL</h6>
          <p>Upholster with your choice of fabric or leather, or design with mixed materials for the seat, back, or frame for a one-of-a-kind piece.</p>
        </div>
        <div className="tw-w-1/6 tw-text-center">
          <h6>TAILORED ADDITIONS</h6>
          <p>Complement your piece with tailor-made finishing touches—from additional throw pillows to fabric by the yard.</p>
        </div>

      </div>
      <div className="inquiry tw-flex tw-flex-col tw-items-center">
        <h4>Atelier Services</h4>
        <p className='tw-mb-10'>Contact us below for inquiries about Atelier customizations. Our Trade team will be in touch within one business day.</p>
        <div className="iForm tw-w-[70%]">
          <form className=''>
            <Textbox name="Name" />
            <Textbox name="Email" />
            <Textbox name="Phone Number" />
            <div className="">
              <p className="tw-pb-2">Your Customization Request</p>
              <textarea className="tw-textarea tw-textarea-bordered tw-h-[200px] tw-w-full tw-resize-none"></textarea>
            </div>



            <div className="shopButton tw-m-24 tw-flex tw-justify-center tw-mt-6">
              <a href='#' className="tw-px-9 tw-py-3 tw-border-solid tw-border-2 tw-border-black tw-rounded-md">SUBMIT</a>
            </div>
          </form>

        </div>
      </div>
      <Footer />
    </>
    
  )
}

export default Services