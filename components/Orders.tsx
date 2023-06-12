import React from 'react'


export const Orders = () => {
  return (
    <>
    
    <div className="orderspage tw-p-16 ">
        <h2 className='tw-text-[2rem] tw-mb-8'>Orders</h2>
        <div className="overflow-x-auto">
  <table className="tw-table tw-w-full">
    {/* head */}
    <thead>
      <tr>
        <th></th>
        <th>Order Number</th>
        <th>Purchased Items</th>
        <th>Total</th>
      </tr>
    </thead>
    <tbody>
      {/* row 1 */}
      <tr>
        <th>1</th>
        <td>Cy Ganderton</td>
        <td>Quality Control Specialist</td>
        <td>Blue</td>
      </tr>
      {/* row 2 */}
      <tr>
        <th>2</th>
        <td>Hart Hagerty</td>
        <td>Desktop Support Technician</td>
        <td>Purple</td>
      </tr>
      {/* row 3 */}
      <tr>
        <th>3</th>
        <td>Brice Swyre</td>
        <td>Tax Accountant</td>
        <td>Red</td>
      </tr>
    </tbody>
  </table>
</div>
    </div>
    


    </>
  )
}
