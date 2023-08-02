import React from 'react'
import Link from 'next/link'

interface cartItems {
    name: string
    quantity: number
    price: number
    id: number
}

export const CartItem = ({ name, quantity, price, id}: cartItems) => {

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
            <td>${price*quantity}</td>
            <th>
            <Link href={`/product/${id}`} className="tw-btn tw-btn-ghost tw-btn-xs">DETAILS</Link>
            </th>
        </tr>
  )
}

