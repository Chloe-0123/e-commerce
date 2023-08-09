/* eslint-disable react/jsx-key */
import React, { useEffect, useState } from 'react'
import Header from '@/components/header'
import Footer from '@/components/Footer';
import { MainPic } from '@/components/MainPic';
import { PageIntro } from '@/components/PageIntro';
import { VerticalCard } from '@/components/VerticalCard';
import { Product } from '@/components/Product';
import { useRouter } from 'next/router';
import { type } from 'os';

interface ProductData {
    product_id: number;
    name: string;
    price: string;
    file_location: string;
}

const ShopPage = () => {

    const [productData, setProductData] = useState<ProductData[]>([]); // Use the correct type ProductData[]

    const router = useRouter();
    const { id } = router.query;

    let category

    if (id === '1') {
        category = 'Living'
    } else if (id === '2') {
        category = 'Dining'
    } else {
        category = 'Bedroom'
    }

    console.log(typeof(id))

    useEffect(() => {
        if (id) {
          fetch(`/api/product/getCategory?id=${id}`)
            .then((response) => response.json())
            .then((data) => {
              console.log('Fetch response:', data);
              setProductData(data);
            })
            .catch((error) => {
              console.log('Error fetching product data:', error);
            });
        }
      }, [id]);

      console.log(productData)

   return(
    <>
        <Header />
        <MainPic url='/img/wall2.jpg' text={category} category={true}/>
        <div>
            {id === '2' ? 
            
            <>
            
            <PageIntro title="Dining" p="Timeless shapes designed with luxe detail, handcrafted to order for unparalleled comfort and longevity."/>
            <div className="products tw-w-screen tw-flex tw-flex-wrap tw-gap-8 tw-justify-center">
                { productData && productData.map((item) => (
                    <Product url={`/${item.file_location}`} name={item.name} price={item.price} product_id={item.product_id}/>
                ))}
                

            </div>
            
            
            </> :
            
            
            <>
            
            <div className="tw-h-screen">
            <PageIntro title={`The ${id === '1' ? "Living " : "Bed"}Room Collection`} p="Crafted to perfection, our timeless silhouettes boast luxurious detailing, meticulously handcrafted for ultimate comfort and lasting durability."/>
            <div className="cards tw-flex tw-gap-x-12 tw-h-fit tw-justify-center tw-mt-20">
                {id === '3' ? <><VerticalCard imgSrc='/img/cozyLivingRoom.jpg' imgDesc='Shop Beds' redirect='/furniture/Bed'/>
                <VerticalCard imgSrc='/img/accent.jpg' imgDesc='Shop Nightstands / Dressers' redirect='/furniture/Dresser'/>
                <VerticalCard imgSrc='/img/chair.jpg' imgDesc='Shop Chairs' redirect='/furniture/Chair'/></> : 
                
                <>
                    <VerticalCard imgSrc='/img/cozyLivingRoom.jpg' imgDesc='Shop Sofas' redirect='/furniture/Sofa'/>
                    <VerticalCard imgSrc='/img/accent.jpg' imgDesc='Shop Tables'redirect='/furniture/Table'/>
                    <VerticalCard imgSrc='/img/chair.jpg' imgDesc='Shop Chairs'redirect='/furniture/Chair'/>
                </>}
            </div>
            </div>
            <div className="products tw-w-screen tw-flex tw-flex-wrap tw-gap-8 tw-justify-center">
            { productData && productData.map((item) => (
                    <Product url={`/${item.file_location}`} name={item.name} price={item.price} product_id={item.product_id}/>
                ))}

            </div>
            </>}
        </div>
        <Footer />
    
    </>
        
   
   )

}

export default ShopPage
  