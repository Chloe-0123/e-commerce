"use client";
import '../styles/globals.css'

import React, { useState } from 'react'
import Navbar from './navbar';

const Header = () => {
    return (
      <>
        <div className="header tw-bg-yellow-50">
          <div className="name tw-text-center"><a href="#">Modish Moments</a></div>
          <Navbar />
        </div>
      </>
    );
  };
  
  export default Header;