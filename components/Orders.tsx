/* eslint-disable react/jsx-key */
import { UserContext } from './UserContext'
import { useContext, useState, useEffect } from 'react'



export const Orders = () => {

  const { user } = useContext(UserContext)
  const [orders, setOrders] = useState([])
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (user !== 0) {
      fetch(`api/order/findOrder?customer_id=${(user)}`)
        .then((response) => response.json())
        .then((data) => {
            setOrders(data);
            setLoading(false); // Set loading to false once data is fetched
        })
        .catch((error) => {
            console.error('Error fetching orders data:', error);
            setLoading(false); // Set loading to false if there's an error
        });

    }

    
    
}, []); 

console.log(orders)


  return (
    <> {!loading && <div className="orderspage tw-p-16 ">
    <h2 className='tw-text-[2rem] tw-mb-8'>Orders</h2>
    <div className="overflow-x-auto">
    <table className="tw-table tw-w-full">
    {/* head */}
    <thead>
      <tr>
        <th></th>
        <th className='tw-text-[1.3rem]'>Order Number</th>
        <th className='tw-text-[1.3rem]'>Product(s)</th>
        <th className='tw-text-[1.3rem]'>Total</th>
      </tr>
    </thead>
    <tbody>
      {orders.map((item) => (
        <>
        <tr>
        <th>-</th>
        <td className='tw-text-[1.2rem]'>{item.order_id}</td>
        <td className='tw-text-[1.2rem]'>{JSON.parse(item.products).map((product:any) => (
          <span> {product.name} /</span>
        ))}
          </td>
        <td className='tw-text-[1.2rem]'>{item.total}</td>
      </tr>
        </>
      ))}
      
      
    </tbody>
    </table>
    </div>
</div>}
    
    
    


    </>
  )
}
