"use client";
import '../styles/globals.css'
import Link from 'next/link';
import React, { useState, createContext, useEffect, useContext } from 'react'
import Navbar from './navbar';
import { useSession, signIn, signOut } from "next-auth/react"
import CartIcon from './CartIcon';
import { UserContext } from '@/components/UserContext';


const Header = () => {
    const { data: session } = useSession()
    const [cartQuantity, setCartQuantity] = useState(0) 
    const { user, setUser } = useContext(UserContext)
    
    useEffect(() => {
      if (session) {
        fetch(`api/user/getUser?email=${encodeURIComponent(session.user?.email)}`)
        .then((response) => response.json())
        .then((data) => {
          setUser(data[0].id)
           // Set loading to false once data is fetched
        })
        .catch((error) => {
          console.error('Error fetching user data:', error);
          // Set loading to false if there's an error
        });
      }
    },[])

    console.log('header', user)

    
  

    return (
      <>
        <div className="header">
        <div className="tw-navbar ">
          <div className="hamburger tw-w-[30%]"></div>
          <div className="shop-title tw-flex-1 tw-justify-center tw-w-[30%]">
            <a className="tw-normal-case tw-text-xl" href='/'>Modish Moments</a>
          </div>
          <div className="cart-and-profile tw-flex tw-w-[30%] tw-justify-end tw-flex tw-gap-4">
            {session && <CartIcon />}
            <div className="profile-icon tw-dropdown tw-dropdown-end">
              <label tabIndex={0} className="tw-btn tw-btn-ghost tw-btn-circle tw-avatar">
                <div className="tw-w-10 tw-rounded-full">
                  <img src="/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                </div>
              </label>
              <ul tabIndex={0} className="tw-menu tw-menu-compact tw-dropdown-content tw-mt-3 tw-p-2 tw-shadow tw-bg-base-100 tw-rounded-box w-52">
                <li>
                  <Link href="/profile">Profile</Link>
                </li>
                
                {session? <li> <Link href="/" onClick={() =>signOut()}>Log Out</Link></li> : <li><Link href={'/auth'}>Log In</Link></li>}
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