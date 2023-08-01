import React, { useState } from 'react'
import { SessionProvider, useSession, signIn, signOut } from 
"next-auth/react"
import CartIcon from './CartIcon'

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


interface AddToCartProps {
  quantity: number;
  productName: string;
  productPrice: number;

}
export const AddToCart = ({ quantity, productName, productPrice }:AddToCartProps) => {

  const [clicked, setClicked] = useState(false)


  function handleClicked() {
    /*setClicked(true)
    alert(`${quantity} ${productName} ${productPrice}`)
    
    setClicked(false)*/

    setClicked(true)
    //check for existing cart
    
    const existingCart = JSON.parse(localStorage.getItem('cart')) || [];
    console.log('existing cart' , existingCart)

    // Check if the item is already in the cart based on its unique identifier (e.g., product ID)
    const itemIndex = existingCart.findIndex((cartItem) => cartItem.name === productName)

    if(itemIndex === -1){
      existingCart.push({name:productName, number:quantity, price:productPrice})
    } else {
      existingCart[itemIndex].number += quantity
    }

    const cartToString = JSON.stringify(existingCart)
    localStorage.setItem('cart', cartToString)
    const event = new Event('one item added')
    document.dispatchEvent(event)
    
  }

  return(
    <>
    
    
    <div className="shopButton tw-flex-col tw-items-center tw-mt-6 tw-w-full">
      <a href="#" className="tw-block tw-text-center tw-py-3 tw-border-solid tw-border-[1px] tw-border-black tw-w-full" onClick={handleClicked}>Add to Cart</a>

      {clicked && 
        <div className="tw-alert tw-alert-success tw-mt-4">
        <svg xmlns="http://www.w3.org/2000/svg" className="tw-stroke-current tw-shrink-0 tw-h-6 tw-w-6" fill="none" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
        <span>Added to Cart!</span>
        </div>}
    </div>
   
    
   
  
  </>


  )
}

// Parent component where the Quantity and AddToCart components are used together

interface QuantityAddProps {
  productName: string;
  productPrice: number;
}

export const QuantityAdd = ({ productName, productPrice }: QuantityAddProps ) => {
  const [quantity, setQuantity] = useState(1);

  return (
    <>
      <Quantity quantity={quantity} setQuantity={setQuantity} />
      <AddToCart quantity={quantity} productName={productName} productPrice={productPrice}/>
    </>
  );
};

interface ConfirmButtonProps {
  name: string
}
export const ConfirmButton = ( { name }: ConfirmButtonProps) => {
  return (
    <div className={"shopButton"}>
    <a href="#" className="tw-px-9 tw-py-3 tw-border-solid tw-border-2 tw-border-black tw-rounded-md">{name}</a>
  </div>
  )
}

export const LoginButton = () => {
  const { data: session } = useSession();

  if (session) {
    return (
      <>
        Signed in as {session.user.email} <br />
        <button className="tw-px-9 tw-py-3 tw-border-solid tw-border-2 tw-border-black tw-rounded-md" onClick={() => signOut()}>Sign out</button>
      </>
    );
  }

  return (
    <>
      <button className="tw-px-9 tw-py-3 tw-border-solid tw-border-2 tw-border-black tw-rounded-md">Sign In</button>
    </>
  );
};

