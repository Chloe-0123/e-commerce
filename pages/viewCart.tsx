/* eslint-disable react/jsx-key */
import React, { useEffect, useContext, useState} from 'react'
import Header from '@/components/header'
import { ConfirmButton } from '@/components/Button'
import { CartItem } from '@/components/CartItem'
import { CartContext } from '@/components/CartContext'
import { useSession, signIn } from 'next-auth/react';
import { UserContext } from '@/components/UserContext'
import { useRouter } from 'next/router'
import { Cormorant } from 'next/font/google'

const cormorant = Cormorant({ subsets: ['latin'] })

interface Order {
    order_id: number
    customer_id: number
    total: number
    products: string
}

interface Item {
  name: string
  number: number
  price: number
  id: number
}

const ViewCart = () => {
   
    const router = useRouter();
    const {data:session} = useSession()
    const {  cartProducts, setCartProducts } = useContext(CartContext)
    const { user } = useContext(UserContext)


    const [items, setItems] = useState([])
    const [total, setTotal] = useState(0)


    useEffect (() => {
        if (session && session.user && session.user.email) {

            /*const cartItems = JSON.parse(localStorage.getItem(session.user?.email)) || [];*/

            const existingCartString = session?.user?.email ? localStorage.getItem(session.user.email) : null;

            let cartItems
            if (existingCartString) {
                cartItems = JSON.parse(existingCartString);
            
            } else {
            cartItems = []
            }

            setItems(cartItems)
            console.log('c', setItems)
    
            const mapped = cartItems.map((item:any) => (Number(item.price) * item.number))
            const totalprice = mapped.reduce((a:any,c:any) => a + c, 0)
    
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
      <div className={cormorant.className}>
      <Header /> 
      {session ? <>
        
       
        <h1 className='tw-mt-16 tw-mb-16 tw-text-[2.5rem] tw-text-center'>Shopping Cart</h1>
        <div className="tw-overflow-x-auto tw-w-full">
        <table className="tw-table w-full tw-bg-amber-100">
            {/* head */}
            <thead>
            <tr>

                <th className='tw-text-[1.5rem]'>Product Name</th>
                <th className='tw-text-[1.5rem]'>Quantity</th>
                <th className='tw-text-[1.5rem]'>Price</th>
                <th></th>
            </tr>
            </thead>
            <tbody>
                {items.map((item:Item) => <CartItem name={item.name} quantity={item.number} price={item.price} id={item.id}/>)}
            </tbody>

            
        </table>
        </div>

        <h1 className="tw-mt-16 tw-text-[1.5rem] tw-text-center">Total: ${total.toFixed(2)}</h1>
        <div className="tw-flex tw-justify-center tw-mt-32">
        <div className={"shopButton"}>
            <a onClick={handleOrder} className="tw-px-9 tw-py-3 tw-border-solid tw-border-2 tw-border-black tw-rounded-md">Place Order</a>
        </div>
        </div>
      

      
      </> : <div>
          <p>You are not signed in.</p> <button onClick={() => signIn()}>Sign In</button>
        </div>}

      </div>
       
        
        </>
    
  )
}

export default ViewCart