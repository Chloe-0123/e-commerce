import React, { useEffect, useContext, useState} from 'react'
import Header from '@/components/header'
import { ConfirmButton } from '@/components/Button'
import { CartItem } from '@/components/CartItem'
import { CartContext } from '@/components/CartContext'

const ViewCart = () => {
   
    const {  cartProducts,setCartProducts }= useContext(CartContext)


    const [items, setItems] = useState([])
    const [total, setTotal] = useState(0)


    useEffect (() => {
        const cartItems = JSON.parse(localStorage.getItem('cart')) || [];
        setItems(cartItems)
        console.log('c', setItems)

        const mapped = cartItems.map((item) => (Number(item.price) * item.number))
        const totalprice = mapped.reduce((a,c) => a + c, 0)

        setTotal(totalprice)
       


    },[cartProducts])

    return (
        <>  
        <Header />
        <h1 className='tw-mt-16 tw-mb-16'>Shopping Cart</h1>
        <div className="tw-overflow-x-auto tw-w-full">
        <table className="tw-table w-full tw-bg-amber-100">
            {/* head */}
            <thead>
            <tr>
                <th>
                
                </th>
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
            <ConfirmButton name="Order All" />
        </div>
        <div className="tw-flex tw-justify-center tw-mt-8">
            <ConfirmButton name="Order Selected" />
        </div>
    

        </>
    
  )
}

export default ViewCart