/* eslint-disable react/jsx-key */
/* eslint-disable react-hooks/rules-of-hooks */
import React, { useEffect, useState } from 'react'
import Header from '@/components/header'
import Footer from '@/components/Footer';
import { MainPic } from '@/components/MainPic';
import { PageIntro } from '@/components/PageIntro';
import { VerticalCard } from '@/components/VerticalCard';
import { Product } from '@/components/Product';
import { useRouter } from 'next/router';

interface ProductData {
    product_id: number;
    name: string;
    price: string;
    file_location: string;
}

const shopByFurniture = () => {

    const [productData, setProductData] = useState<ProductData[]>([]);
    const router = useRouter();
    const { furniture } = router.query;

    useEffect(() => {
        if (furniture) {
          fetch(`/api/product/getFurniture?furniture=${furniture}`)
            .then((response) => response.json())
            .then((data) => {
              console.log('Fetch response:', data);
              setProductData(data);
            })
            .catch((error) => {
              console.log('Error fetching product data:', error);
            });
        }
      }, [furniture]);


  return (
    <>
        <Header />
        <MainPic url='/img/smallTable.jpg' text={`Our ${furniture}s`}/>
        <div className="products tw-w-screen tw-flex tw-flex-wrap tw-gap-8 tw-justify-center">
            {productData.map((item) => (
                <Product url={`/${item.file_location}`} name={item.name} price={item.price} product_id={item.product_id}/>
            ))}
        </div>
        <Footer />
        
    
    
    
    
    </>
  )
}

export default shopByFurniture