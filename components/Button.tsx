import React, { useState } from 'react'

interface buttonProps {
  path: string
  inquire?:string
}


export const ShopTheCollectionButton = ( { path, inquire }: buttonProps ) => {
  return ( 
    <div className={inquire ? "shopButton tw-m-24 tw-flex tw-justify-center tw-mt-6" : "shopButton tw-m-24 tw-flex tw-justify-center"}>
      <a href={path} className="tw-px-9 tw-py-3 tw-border-solid tw-border-2 tw-border-black tw-rounded-md">{inquire ? inquire : 'SHOP THE COLLECTION'}</a>
    </div>
  )
}

export const Quantity = ({quantity, setQuantity}:any) => {

  

  function handleClick(value:string) {

    if (quantity === 0 && value === '-') {
      return 
    }

    if (value === '-') {
      setQuantity(quantity - 1)
    } else {
      setQuantity(quantity + 1)
    }
  }


  return(

    <div className="num-block skin-5">
      <div className="tw-w-[90px] tw-align-middle tw-border-solid tw-border-slate-200 tw-border-[1px] tw-rounded-sm">
        <button className="tw-text-[16px] tw-w-[20px] tw-leading-[41px]" onClick={() => handleClick('-')}>-</button>
        <input type="text" className="tw-text-center tw-border-none tw-h-[41px] tw-w-[46px] tw-text-[16px]" value={quantity}/>
        <button className="tw-text-[16px] tw-w-[20px] tw-leading-[41px]" onClick={() => handleClick('+')}>+</button>
      </div>
    </div>
  )
}

export const AddToCart = ({quantity}:any) => {

  const [clicked, setClicked] = useState(false)

  function handleClicked() {
    setClicked(true)
    alert(quantity)
    setClicked(false)

  }

  return(
    <>
    
    
    <div className="shopButton tw-flex tw-justify-center tw-mt-6 tw-w-full">
      <a href="#" className="tw-text-center tw-py-3 tw-border-solid tw-border-[1px] tw-border-black tw-w-full" onClick={handleClicked}>Add to Cart</a>
    </div>
    
   
  
  </>

    //figure out a way to get the quantity number when 'add to cart' button is clicked


  )
}

// Parent component where the Quantity and AddToCart components are used together
export const QuantityAdd = () => {
  const [quantity, setQuantity] = useState(1);

  return (
    <>
      <Quantity quantity={quantity} setQuantity={setQuantity} />
      <AddToCart quantity={quantity} />
    </>
  );
};

export const ConfirmButton = () => {
  return (
    <div className={"shopButton" }>
    <a href="#" className="tw-px-9 tw-py-3 tw-border-solid tw-border-2 tw-border-black tw-rounded-md">Save</a>
  </div>
  )
}