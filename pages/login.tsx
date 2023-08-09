import { useState , ChangeEventHandler} from 'react'
import Header from '@/components/header'
import { Textbox2 } from '@/components/Textbox'
import { LoginButton } from '@/components/Button'
import Link from 'next/link'
import { signIn } from "next-auth/react"
import { useRouter } from 'next/router';


export default function Login() {
  const router = useRouter();

  const [formData, setFormData] = useState({
    email: "",
    password: ""
  })

  const handleChange: ChangeEventHandler<HTMLInputElement> = (event) => {
    setFormData(prev => {
        return {
            ...prev,
            [event.target.name]: event.target.value
        }
    })
  }

  console.log(formData.email)
  console.log(formData.password)

  const handleLogin = async (event:any) => {
    event.preventDefault()
    console.log('email' , formData.email)
    console.log('password', formData.password)
    const result = await signIn('credentials', {
      // login credentials 
      email: formData.email,
      password: formData.password,
      redirect: false, // Disable automatic redirect
    });

    if (result && result.error) {
      // Handle login error
      console.error('login page Error logging in:', result.error);
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
            <form onSubmit={handleLogin}>
              <Textbox2 name="email" desc='Email' type='text' onChange={handleChange} value={formData.email}/>
              <Textbox2 name="password" desc='Password' type='password' onChange={handleChange} value={formData.password}/>
              <LoginButton/>
              <div className='tw-mt-8'><Link href={'/signup'} className="tw-px-9 tw-py-3 tw-border-solid tw-border-2 tw-border-black tw-rounded-md tw-mt-16">Sign Up</Link></div>


            </form>
            
            
              
           
        </div>
        

    </div>
    </>
   
  )
}


