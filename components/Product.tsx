import React from 'react'
import Link from 'next/link'
import { QuantityAdd } from './Button'


interface ProductProps {
  url: string,
  name: string,
  price: number
  product_id: string
}

export const Product = ({ url, name, price, product_id }:ProductProps) => {
  return (
    <>
    <div className="tw-w-[43%] tw-py-8">
      <Link href={`/product/${product_id}`}>
      <div
        className="tw-bg-cover tw-bg-[left_calc(0%)_top_calc(75%)] tw-bg-center tw-h-[400px]"
        style={{ backgroundImage: `url(${url})` }}
      >
      </div>
      <div className="tw-flex tw-justify-between">
        <p>{name}</p>
        <p>${price}</p>

      </div>

      </Link>

    </div>
    
    </>
  )
}

interface ProductDescProps {
  productName: string,
  productPrice: number,
  productDesc: string
  productId: number

}
export const ProductDesc = ({ productName, productPrice, productDesc, productId}: ProductDescProps) => {

  return (

    <div className="productdesc tw-w-[30%] tw-h-[80vh]  tw-p-10">

      <div className="">
      <h3 className='tw-text-[2rem]'>{productName}</h3>
      <h3 className='tw-text-[1.2rem] tw-mb-8'>${productPrice}</h3>
      </div>
      <p className='tw-mb-8'>{productDesc}</p>
      <QuantityAdd productName={productName} productPrice={productPrice} productId={productId}/>


    </div>



  )
}