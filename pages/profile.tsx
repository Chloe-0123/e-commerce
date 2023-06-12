import React, { useState } from 'react'
import Header from '@/components/header'
import { Settings } from '@/components/Settings'
import { Orders } from '@/components/Orders'

const Profile = () => {
  //change password, id, address 
  //delete account 
  // show orders? on profile

  const [setting, handleSetting] = useState(true)
  const [orders, handleOrders] = useState(false)

  function handleOrdersClick() {
    if (orders) {
      return
    }
    handleSetting(!setting)
    handleOrders(!orders)
  }

  function handleSettingsClick() {
    if (setting) {
      return
    }
    handleOrders(!orders)
    handleSetting(!setting)
  }

  return (
    <>

    <Header />
    <div className="tw-flex" style={{"height": "calc(100vh - 106px)"}}>

    <div className="righttab tw-w-[20%] tw-bg-slate-200 tw-h-full ">
      <ul>
        <li><a href='#' onClick={handleSettingsClick}>Account Settings</a></li>
        <li><a href="#" onClick={handleOrdersClick}>Orders</a></li>
        
        
      </ul>

    </div>

      <div className="leftpage tw-w-[80%] tw-h-full">
      
      
        {setting ?  <Settings email='user123@user.com' name='Bob Bobberson' streetName='Ilivehere St.' streetNumber={1234} phoneNumber={1234567890} city='Userville' state='Washington' ZIP={12345}/> : <Orders />}
      </div>


    </div>  
    
    </>
   
  )
}

export default Profile