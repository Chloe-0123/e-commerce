"use client";
import '../styles/globals.css'

import React, { useState } from 'react'
import Navbar from './navbar';

const Header = () => {
    return (
      <>
        <div className="header">
        <div className="tw-navbar ">
          <div className="hamburger tw-w-[30%]"></div>
          <div className="shop-title tw-flex-1 tw-justify-center tw-w-[30%]">
            <a className="tw-normal-case tw-text-xl" href='/'>Modish Moments</a>
          </div>
          <div className="cart-and-profile tw-flex tw-w-[30%] tw-justify-end tw-flex tw-gap-4">
            <div className="cart-icon tw-dropdown tw-dropdown-end">
              <label tabIndex={0} className="tw-btn tw-btn-ghost tw-btn-circle">
                <div className="cart-icon tw-indicator tw-w-[30px] tw-h-[30px]">
                  <svg xmlns="http://www.w3.org/2000/svg" data-name="Layer 1" viewBox="0 0 200 200" id="Cart"><path d="M75 71.09v-10c0-14.28 11.15-25.93 25-25.93s25 11.65 25 25.93v10h17.28A3.13 3.13 0 0 1 145.4 74l5.94 87.5a3.14 3.14 0 0 1-2.91 3.33H51.78a3.12 3.12 0 0 1-3.12-3.12v-.21L54.6 74a3.13 3.13 0 0 1 3.12-2.92Zm9.38 0h31.25v-10c0-9.19-7-16.56-15.63-16.56S84.38 51.9 84.38 61.09Zm-25.91 84.38h83.06l-5.08-75H63.56Z" fill="#d8a353" className="color000000 svgShape"></path></svg>
                  <span className="tw-badge tw-badge-sm tw-indicator-item">8</span>
                </div>
              </label>
              <div tabIndex={0} className="cart-content tw-mt-3 tw-card tw-card-compact tw-dropdown-content tw-w-52 tw-bg-base-100 tw-shadow">
                <div className="tw-card-body">
                  <span className="tw-font-bold tw-text-lg">8 Items</span>
                  <span className="tw-text-info">Subtotal: $999</span>
                  <div className="tw-card-actions">
                    <button className="tw-btn tw-btn-primary tw-btn-block">View cart</button>
                  </div>
                </div>
              </div>
            </div>
            <div className="profile-icon tw-dropdown tw-dropdown-end">
              <label tabIndex={0} className="tw-btn tw-btn-ghost tw-btn-circle tw-avatar">
                <div className="tw-w-10 tw-rounded-full">
                  <img src="/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                </div>
              </label>
              <ul tabIndex={0} className="tw-menu tw-menu-compact tw-dropdown-content tw-mt-3 tw-p-2 tw-shadow tw-bg-base-100 tw-rounded-box w-52">
                <li>
                  <a className="tw-justify-between">
                    Profile
                  
                  </a>
                </li>
                <li><a>Settings</a></li>
                <li><a>Logout</a></li>
              </ul>
            </div>
          </div>
        </div>
          <Navbar />
        </div>
      </>
    );
  };
  
  export default Header;