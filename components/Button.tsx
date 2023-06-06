import React from 'react'

interface buttonProps {
  path: string
  inquire?:string
}


const ShopTheCollectionButton = ( { path, inquire }: buttonProps ) => {
  return ( 
    <div className={inquire ? "shopButton tw-m-24 tw-flex tw-justify-center tw-mt-6" : "shopButton tw-m-24 tw-flex tw-justify-center"}>
      <a href={path} className="tw-px-9 tw-py-3 tw-border-solid tw-border-2 tw-border-black tw-rounded-md">{inquire ? inquire : 'SHOP THE COLLECTION'}</a>
    </div>
  )
}

export default ShopTheCollectionButton