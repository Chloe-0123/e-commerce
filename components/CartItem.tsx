import React from 'react'
import Link from 'next/link'
import { CartContext } from '@/components/CartContext'
import { useContext } from 'react'
import { useSession } from 'next-auth/react'

interface cartItems {
    name: string
    quantity: number
    price: number
    id: number
}

export const CartItem = ({ name, quantity, price, id}: cartItems) => {

    const {  cartProducts,setCartProducts }= useContext(CartContext)
    const { data: session } = useSession()
    //console.log(session)

    function handleDelete(name:string) {
        /*const cartItems = JSON.parse(localStorage.getItem(session?.user?.email))*/
        const existingCartString = session?.user?.email ? localStorage.getItem(session.user.email) : null;
        const cartItems = existingCartString && JSON.parse(existingCartString)
        console.log(cartItems)
        const removed = cartItems.filter((item:any) => item.name !== name)
        const removedtostring = JSON.stringify(removed)

        console.log(removed)
        localStorage.setItem(session?.user?.email ? session?.user.email: '', removedtostring)
        setCartProducts(removed)
    }



  return (
    <>
         <tr>
            
            <td>
            <div className="tw-flex tw-items-center tw-space-x-3">

                <div>
                <div className="tw-font-bold tw-text-[1.3rem]">{name}</div>
                <div className="tw-text-sm tw-opacity-50">{}</div>
                </div>
            </div>
            </td>
            <td>
            {quantity}
            <br/>
            
            </td>
            <td className='tw-text-[1.3rem]'>
                ${(price*quantity).toFixed(2)}
            </td>
            <td>
            <Link href={`/product/${id}`} className="tw-btn tw-btn-ghost tw-btn-xs tw-text-[1.1rem]">DETAILS</Link>
            </td>
            <td><a onClick={() => handleDelete(name)} className="tw-btn tw-btn-ghost tw-btn-xs tw-text-[1.1rem]">DELETE</a></td>
    </tr>
    
    </>
   
  )
}

