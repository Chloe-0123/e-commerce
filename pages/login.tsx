import React from 'react'
import Header from '@/components/header'
import { Textbox2 } from '@/components/Textbox'
import { LoginButton } from '@/components/Button'
import Link from 'next/link'
import { useSession, signIn, signOut } from "next-auth/react"


export default function Login() {


  const handleLogin = async (event:any) => {
    event.preventDefault()

    const result = await signIn('credentials', {
      // Provide your login credentials here
      email: 'user@example.com',
      password: 'password',
      redirect: false, // Disable automatic redirect
    });

    if (result.error) {
      // Handle login error
      console.error('Error logging in:', result.error);
    } else {
      // Handle successful login
      router.push('/'); // Redirect to the homepage
    }
  };


  



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
            <button className="tw-px-9 tw-py-3 tw-border-solid tw-border-2 tw-border-black tw-rounded-md" onClick={handleLogin}><LoginButton /></button>
            <div className='tw-mt-8'><Link href={'/signup'} className="tw-px-9 tw-py-3 tw-border-solid tw-border-2 tw-border-black tw-rounded-md tw-mt-16">Sign Up</Link></div>
            
              
           
        </div>
        

    </div>
    </>
   
  )
}


