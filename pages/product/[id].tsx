import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { PCarousel } from '@/components/Carousel';
import Header from '@/components/header';
import { ProductDesc } from '@/components/Product';
import { Cormorant } from 'next/font/google'
import Footer from '@/components/Footer';

const cormorant = Cormorant({ subsets: ['latin'] })

interface ProductData {
  product_id: number;
  name: string;
  desc: string;
  price: number;
  file_location: string;
}

const ProductPage = () => {
  const [productData, setProductData] = useState<ProductData[]>([]); // Use the correct type ProductData[]

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
     <div className={cormorant.className}>
     <Header />
      <div className='tw-flex tw-mt-8'>
        <div className="swipers">
          {productData.length > 0 && <PCarousel image_location={productData[0].file_location} name={productData[0].name}/>}
        </div>

        {productData.length > 0 && ( // Check if productData is not empty before rendering ProductDesc
          <ProductDesc
            productDesc={productData[0].desc} // Assuming there's only one product with the given id
            productName={productData[0].name}
            productPrice={productData[0].price}
            productId={productData[0].product_id}
          />
        )}
      </div>
      <Footer />
     </div>
      
    </>
  );
};

export default ProductPage;
