import React from 'react'
import Link from 'next/link'
import { CartContext } from '@/components/CartContext'
import { useContext } from 'react'

interface cartItems {
    name: string
    quantity: number
    price: number
    id: number
}

export const CartItem = ({ name, quantity, price, id}: cartItems) => {

    const {  cartProducts,setCartProducts }= useContext(CartContext)

    function handleDelete(name:string) {
        const cartItems = JSON.parse(localStorage.getItem('cart'))
        const removed = cartItems.filter((item:any) => item.name !== name)
        const removedtostring = JSON.stringify(removed)

        console.log(removed)
        localStorage.setItem('cart', removedtostring)
        setCartProducts(removed)
    }



  return (
    
    <tr>
            <th>
            <label>
                <input type="checkbox" className="tw-checkbox" />
            </label>
            </th>
            <td>
            <div className="tw-flex tw-items-center tw-space-x-3">

                <div>
                <div className="tw-font-bold">{name}</div>
                <div className="tw-text-sm tw-opacity-50">{}</div>
                </div>
            </div>
            </td>
            <td>
            {quantity}
            <br/>
            
            </td>
            <td>
                ${(price*quantity).toFixed(2)}
            </td>
            <td>
            <Link href={`/product/${id}`} className="tw-btn tw-btn-ghost tw-btn-xs">DETAILS</Link>
            </td>
            <td><a onClick={() => handleDelete(name)} className="tw-btn tw-btn-ghost tw-btn-xs">DELETE</a></td>
    </tr>
  )
}

