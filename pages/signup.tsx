import { useState } from 'react'
import Header from '@/components/header'
import { Textbox2 } from '@/components/Textbox'
import Link from 'next/link'
import { useRouter } from 'next/router';
import connection from '../config/db';


export default function Signup() {

  const router = useRouter();


  // Define state variables for form input values
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');


  //handle submission
  



  return (

    <>
    <Header />
    <div className="tw-h-screen tw-w-screen tw-flex">
        <div className="tw-w-[50%] tw-h-screen tw-bg-black" style = {{backgroundImage: 'url("/img/accent.jpg")' , backgroundSize: 'cover'}}>
            
        </div>

        <div className=" tw-w-[50%] tw-h-screen ">

            <h2>Sign Up</h2>
            <Textbox2 name="firstName" desc='First Name' type='text'/>
            <Textbox2 name="lastName" desc='Last Name' type='text'/>
            <Textbox2 name="email" desc='Email' type='text' />
            <Textbox2 name="password" desc='Password' type='password' />
            
            
            <div className='tw-mt-8'><Link href={'/login'} className="tw-px-9 tw-py-3 tw-border-solid tw-border-2 tw-border-black tw-rounded-md tw-mt-16">Sign Up</Link></div>
        </div>


    </div>
    </>
   
  )
}


