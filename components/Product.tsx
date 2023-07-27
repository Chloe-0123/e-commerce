import React from 'react'
import Link from 'next/link'
import { QuantityAdd } from './Button'


interface ProductProps {
  url: string,
  name: string,
  price: number
}

export const Product = ({ url, name, price }:ProductProps) => {
  return (
    <>
    <div className="tw-w-[43%] tw-py-8">
      <Link href="/product">
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

}
export const ProductDesc = ({ productName, productPrice, productDesc}: ProductDescProps) => {

  return (

    <div className="productdesc tw-w-[30%] tw-h-[80vh]  tw-p-10">

      <div className="">
      <h3 className='tw-text-[2rem]'>{productName}</h3>
      <h3 className='tw-text-[1.2rem] tw-mb-8'>${productPrice}</h3>
      </div>
      <p className='tw-mb-8'>{productDesc}</p>
      <QuantityAdd />


    </div>



  )
}