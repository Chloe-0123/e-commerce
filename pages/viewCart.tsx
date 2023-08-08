import React, { useEffect, useContext, useState} from 'react'
import Header from '@/components/header'
import { ConfirmButton } from '@/components/Button'
import { CartItem } from '@/components/CartItem'
import { CartContext } from '@/components/CartContext'
import { useSession, signIn } from 'next-auth/react';
import { UserContext } from '@/components/UserContext'
import { useRouter } from 'next/router'

interface Order {
    order_id: number
    customer_id: number
    total: number
    products: string
}

const ViewCart = () => {
   
    const router = useRouter();
    const {data:session} = useSession()
    const {  cartProducts, setCartProducts } = useContext(CartContext)
    const { user } = useContext(UserContext)


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

    const handleOrder = async(event:any) => {
        event.preventDefault();

        try {
            const orderInfo = {
                customer_id: user, // Replace with the actual customer ID
                total: total.toFixed(2),    // Replace with the actual total amount
                products: items
            };

            const response = await fetch('api/order/storeOrder', {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json',
              },
              body: JSON.stringify(orderInfo)
      
            })
            if (!response.ok) {
              // Handle the case when the server returns an error
              throw new Error('Network response was not okay');
            } else {
                alert('Ordered Successfully. You can check your order in your profile page')
                router.push('/')
            }
          } catch (error) {
            console.log('Order failed: ', error)
          }
        

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