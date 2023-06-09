import React from 'react';
import { PCarousel } from '@/components/Carousel';
import Header from '@/components/header';
import { ProductDesc } from '@/components/Product';



const ProductInfo = () => {
    return (

        <>
        <Header />
        
        <div className='tw-flex'>
            <div className="swipers">
                
                <PCarousel />
        
                
                
            </div>
            <ProductDesc productDesc='lorem ipsum' productName='Villary Couch' productPrice={400} />


        </div>

       
       
        </>
    )
  
};

export default ProductInfo;
