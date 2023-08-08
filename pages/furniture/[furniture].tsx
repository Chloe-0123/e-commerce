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
    <div>[furniture]</div>
  )
}

export default shopByFurniture