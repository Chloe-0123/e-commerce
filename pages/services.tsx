import React from 'react'
import Header from '@/components/header'
import { MainPic } from '@/components/MainPic';
import Footer from '@/components/Footer';
import { ShopTheCollectionButton } from '@/components/Button';
import { Textbox } from '@/components/Textbox';
import { useEffect } from 'react';

const Services = () => {


  return (

    <>
      <Header />
      <MainPic url='img/mainPage.jpg' text="The Atelier"/>
      <div className='tw-flex tw-flex-col tw-items-center'>
        <p className='tw-w-[80%] tw-text-[1.5rem] tw-text-center'>A modern alternative to the custom workroom. Realize your design vision with bespoke customizations to our collection—each piece tailor-made for your project.</p>
        <ShopTheCollectionButton path="#inquiry" inquire='INQUIRE'/>
      </div>
      <div className="tw-bg-[rgb(250,249,247)] tw-flex tw-justify-center tw-gap-36 tw-py-32">
        <div className="tw-w-1/6 tw-text-center">
          <h6 className='tw-text-[1.6rem] tw-mb-6'>CUSTOMIZATION</h6>
          <p>Precision-engineered with customizable options, tailor the dimensions down to the last inch, including extended depths, widths, and even cushion configurations to match your exact preferences.</p>
        </div>
        <div className="tw-w-1/6 tw-text-center">
          <h6 className='tw-text-[1.6rem] tw-mb-6'>CUSTOMER`S MATERIAL</h6>
          <p>Choose your fabric or leather, and mix materials for a truly unique piece.</p>
        </div>
        <div className="tw-w-1/6 tw-text-center">
          <h6 className='tw-text-[1.6rem] tw-mb-6'>TAILORING</h6>
          <p>Enhance your item with personalized final flourishes, including extra throw pillows or fabric available by the yard.</p>
        </div>

      </div>
      <div className="inquiry tw-flex tw-flex-col tw-items-center tw-mt-16" id='inquiry'>
        <h4 className='tw-text-[3rem]'>Atelier Services</h4>
        <p className='tw-mb-10 tw-text-[1.3rem]'>For inquiries about Atelier customizations, reach out using the form below. Our team will respond within one business day.</p>
        <div className="iForm tw-w-[70%] tw-mt-16">
          <form className=''>
            <Textbox name="Name" />
            <Textbox name="Email" />
            <Textbox name="Phone Number" />
            <div className="">
              <p className="tw-pb-2 tw-text-[1.3rem]">Your Customization Request</p>
              <textarea className="tw-textarea tw-textarea-bordered tw-h-[200px] tw-w-full tw-resize-none tw-text-[1.3rem]"></textarea>
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