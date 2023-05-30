"use client";

import React, { useState } from 'react'
import Navbar from '../components/navbar';

const Header = () => {
    return (
      <>
        <div className="header bg-yellow-50">
          <div className="name text-center"><a href="#">Modish Moments</a></div>
          <Navbar />
        </div>
      </>
    );
  };
  
  export default Header;