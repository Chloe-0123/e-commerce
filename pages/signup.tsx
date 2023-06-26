import { useState, FormEventHandler, EventHandler } from 'react'
import Header from '@/components/header'
import { Textbox2 } from '@/components/Textbox'
import Link from 'next/link'
import { useRouter } from 'next/router';
import connection from '../config/db';
import axios from 'axios';


export default function Signup() {

  const router = useRouter();


  // Define state variables for form input values
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  // Event handler for first name input
  const handleFirstNameChange = (event:any) => {
    setFirstName(event.target.value);
  };

  // Event handler for last name input
  const handleLastNameChange = (event:any) => {
    setLastName(event.target.value);
    
  };

  // Event handler for email input
  const handleEmailChange = (event:any) => {
    setEmail(event.target.value);
    
  };

  // Event handler for password input
  const handlePasswordChange = (event:any) => {
    setPassword(event.target.value);
    
  };

  console.log(firstName)
  console.log(lastName)
  console.log(email)
  console.log(password)


  //handle submission
  const handleSubmit = async (event:any) =>  {
    event.preventDefault()

    const newUser = {
      firstName,
      lastName,
      email,
      password,
    };

    axios.post('/api/user/storeUser', newUser)
    .then((response) => {
      // Handle successful registration
      console.log(response)
      router.push('/login');
    })
    .catch((error) => {
      // Handle registration error
      console.error('Error registering user:', error);
    });


  }
  
  return (

    <>
    <Header />
    <div className="tw-h-screen tw-w-screen tw-flex">
        <div className="tw-w-[50%] tw-h-screen tw-bg-black" style = {{backgroundImage: 'url("/img/accent.jpg")' , backgroundSize: 'cover'}}>
            
        </div>

        <div className=" tw-w-[50%] tw-h-screen ">

            <h2>Sign Up</h2>
            <Textbox2 name="firstName" desc='First Name' type='text' onChange={handleFirstNameChange}/>
            <Textbox2 name="lastName" desc='Last Name' type='text'onChange={handleLastNameChange}/>
            <Textbox2 name="email" desc='Email' type='text' onChange={handleEmailChange}/>
            <Textbox2 name="password" desc='Password' type='password' onChange={handlePasswordChange}/>
            
            <div className='tw-mt-8'><button className="tw-px-9 tw-py-3 tw-border-solid tw-border-2 tw-border-black tw-rounded-md tw-mt-16" onClick={handleSubmit}>Sign Up</button></div>
        </div>


    </div>
    </>
   
  )
}


