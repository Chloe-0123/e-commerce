import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { PCarousel } from '@/components/Carousel';
import Header from '@/components/header';
import { ProductDesc } from '@/components/Product';




const ProductPage = () => {

    const [productData, setProductData] = useState(null)

    const router = useRouter();
    const { id } = router.query;

    useEffect(() => {
        if (id) {

          fetch(`/api/product/getOneProduct?id=${id}`)
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
      

      

    return (
        <>
        <Header />
        <p>id: {id}</p>
        
        <div className='tw-flex'>
            <div className="swipers">
                
            {/*<PCarousel />*/}
        
                
                
            </div>
            {productData && <ProductDesc productDesc={productData.desc} productName={productData.name} productPrice={productData.price} />}


        </div>

       
       
        </>
    )



}

export default ProductPage