import React from 'react'

const CartItem = () => {
  return (
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
  )
}

export default CartItem