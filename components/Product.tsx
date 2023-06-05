import React from 'react'

interface ProductProps {
  url: string,
  name: string,
  price: number
}

export const Product = ({ url, name, price }:ProductProps) => {
  return (
    <>
    <div className="tw-w-[43%] tw-py-8">
      <a href="#" className='tw-block'>
      <div
        className="tw-bg-cover tw-bg-[left_calc(0%)_top_calc(75%)] tw-bg-center tw-h-[400px]"
        style={{ backgroundImage: `url(${url})` }}
      >
      </div>
      <div className="tw-flex tw-justify-between">
        <p>{name}</p>
        <p>${price}</p>

      </div>
      </a>

    </div>
    
    </>
  )
}
