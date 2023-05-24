import React from 'react'

interface buttonProps {
  path: string
}


const ShopTheCollectionButton = ( { path }: buttonProps ) => {
  return ( 
    <div className="shopButton tw-m-24 tw-flex tw-justify-center">
                <a href={path} className="tw-px-9 tw-py-3 tw-border-solid tw-border-2 tw-border-black tw-rounded-md">SHOP THE COLLECTION</a>
            </div>
  )
}

export default ShopTheCollectionButton