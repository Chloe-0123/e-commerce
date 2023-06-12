import React from 'react'
import Header from '@/components/header'
import { Textbox2 } from '@/components/Textbox'

export default function Login() {
  return (

    <>
    <Header />
    <div className="tw-h-screen tw-w-screen tw-flex">
        <div className="tw-w-[50%] tw-h-screen tw-bg-black" style = {{backgroundImage: 'url("/img/accent.jpg")' , backgroundSize: 'cover'}}>
            
        </div>

        <div className=" tw-w-[50%] tw-h-screen ">

            <h2>Log In</h2>
            <Textbox2 name="id" />
            <Textbox2 name="password" />
        </div>


    </div>
    </>
   
  )
}


