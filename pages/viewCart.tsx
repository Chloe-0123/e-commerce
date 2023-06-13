import React from 'react'
import Header from '@/components/header'
import { ConfirmButton } from '@/components/Button'


const ViewCart = () => {
  return (
    <>  
    <Header />
    <h1>Shopping Cart</h1>
    <div className="tw-overflow-x-auto tw-w-full">
    <table className="tw-table w-full">
        {/* head */}
        <thead>
        <tr>
            <th>
            <label>
                <input type="checkbox" className="tw-checkbox" />
            </label>
            </th>
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
                    <img src="/tailwind-css-component-profile-2@56w.png" alt="Avatar Tailwind CSS Component" />
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
        {/* row 2 */}
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
                    <img src="/tailwind-css-component-profile-3@56w.png" alt="Avatar Tailwind CSS Component" />
                </div>
                </div>
                <div>
                <div className="tw-font-bold">Brice Swyre</div>
                <div className="tw-text-sm tw-opacity-50">China</div>
                </div>
            </div>
            </td>
            <td>
            Carroll Group
            <br/>
            <span className="tw-badge tw-badge-ghost tw-badge-sm">Tax Accountant</span>
            </td>
            <td>Red</td>
            <th>
            <button className="tw-btn tw-btn-ghost tw-btn-xs">details</button>
            </th>
        </tr>
        {/* row 3 */}
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
                    <img src="/tailwind-css-component-profile-4@56w.png" alt="Avatar Tailwind CSS Component" />
                </div>
                </div>
                <div>
                <div className="tw-font-bold">Marjy Ferencz</div>
                <div className="tw-text-sm tw-opacity-50">Russia</div>
                </div>
            </div>
            </td>
            <td>
            Rowe-Schoen
            <br/>
            <span className="tw-badge tw-badge-ghost tw-badge-sm">Office Assistant I</span>
            </td>
            <td>Crimson</td>
            <th>
            <button className="tw-btn tw-btn-ghost tw-btn-xs">details</button>
            </th>
        </tr>
       
        </tbody>

        
    </table>
    </div>
    <div className="tw-flex tw-justify-center tw-mt-32">
        <ConfirmButton name="Go to Checkout" />
    </div>
   

    </>
    
  )
}

export default ViewCart