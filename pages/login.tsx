import React from 'react'
import Header from '@/components/header'
import { Textbox2 } from '@/components/Textbox'
import { ConfirmButton } from '@/components/Button'
import Link from 'next/link'

export default function Login() {
  return (

    <>
    <Header />
    <div className="tw-h-screen tw-w-screen tw-flex">
        <div className="tw-w-[50%] tw-h-screen tw-bg-black" style = {{backgroundImage: 'url("/img/accent.jpg")' , backgroundSize: 'cover'}}>
            
        </div>

        <div className=" tw-w-[50%] tw-h-screen ">

            <h2>Log In</h2>
            <Textbox2 name="email" desc='Email' type='text' />
            <Textbox2 name="password" desc='Password' type='password' />
            <ConfirmButton name='Log In'/>
            <div className='tw-mt-8'><Link href={'/signup'} className="tw-px-9 tw-py-3 tw-border-solid tw-border-2 tw-border-black tw-rounded-md tw-mt-16">Sign Up</Link></div>
            
              
           
        </div>
        

    </div>
    </>
   
  )
}


