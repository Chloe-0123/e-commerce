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
    

    <div className="tw-overflow-x-auto">
  <table className="tw-table tw-w-full">
    {/* head */}
    <thead>
      <tr>
        <th></th>
        <th>Name</th>
        <th>Job</th>
        <th>Favorite Color</th>
        <th></th>
      </tr>
    </thead>
    <tbody>
      {/* row 1 */}
      <tr>
        <th>
          <label>
            <input type="checkbox" className="tw-checkbox" />
          </label>
        </th>
        <td>
          <div className="tw-flex tw-items-center tw-space-x-3">
            <div className="tw-avatar">
              <div className="tw-mask tw-mask-squircle tw-w-12 tw-h-12">
                <img src="" />
              </div>
            </div>
            <div>
              <div className="tw-font-bold">Hart Hagerty</div>
              <div className="tw-text-sm tw-opacity-50">United States</div>
            </div>
          </div>
        </td>
        <td>
          Zemlak, Daniel and Leannon
          <br/>
          <span className="tw-badge tw-badge-ghost tw-badge-sm">Desktop Support Technician</span>
        </td>
        <td>Purple</td>
        <th>
          <button className="tw-btn tw-btn-ghost tw-btn-xs">details</button>
        </th>
      </tr>
      
    </tbody>
    {/* foot */}
    <tfoot>
      <tr>
        <th></th>
        <th>Name</th>
        <th>Job</th>
        <th className=''>Favorite Color</th>
        <th></th>
      </tr>
    </tfoot>
    
  </table>
</div>


    </>
  )
}
