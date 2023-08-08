import React, { useEffect, useContext, useState} from 'react'
import Header from '@/components/header'
import { ConfirmButton } from '@/components/Button'
import { CartItem } from '@/components/CartItem'
import { CartContext } from '@/components/CartContext'
import { useSession, signIn } from 'next-auth/react';

const ViewCart = () => {
   

    const {data:session} = useSession()

 


    const {  cartProducts, setCartProducts } = useContext(CartContext)


    const [items, setItems] = useState([])
    const [total, setTotal] = useState(0)


    useEffect (() => {
        if (session && session.user.email) {

            const cartItems = JSON.parse(localStorage.getItem(session.user?.email)) || [];
            setItems(cartItems)
            console.log('c', setItems)
    
            const mapped = cartItems.map((item) => (Number(item.price) * item.number))
            const totalprice = mapped.reduce((a,c) => a + c, 0)
    
            setTotal(totalprice)

        }
       
       


    },[cartProducts])

    function handleOrder() {

        

    }

    return (
        
      <> 
       <Header /> 
      {session ? <>
        
       
        <h1 className='tw-mt-16 tw-mb-16'>Shopping Cart</h1>
        <div className="tw-overflow-x-auto tw-w-full">
        <table className="tw-table w-full tw-bg-amber-100">
            {/* head */}
            <thead>
            <tr>

                <th>Product Name</th>
                <th>Quantity</th>
                <th>Price</th>
                <th></th>
            </tr>
            </thead>
            <tbody>
                {items.map((item) => <CartItem name={item.name} quantity={item.number} price={item.price} id={item.id}/>)}
            </tbody>

            
        </table>
        </div>

        <div className="tw-mt-16">Total: ${total.toFixed(2)}</div>
        <div className="tw-flex tw-justify-center tw-mt-32">
        <div className={"shopButton"}>
            <a onClick={handleOrder} className="tw-px-9 tw-py-3 tw-border-solid tw-border-2 tw-border-black tw-rounded-md">Place Order</a>
        </div>
        </div>
      

      
      </> : <div>
          <p>You are not signed in.</p> <button onClick={() => signIn()}>Sign In</button>
        </div>}
        
        </>
    
  )
}

export default ViewCart