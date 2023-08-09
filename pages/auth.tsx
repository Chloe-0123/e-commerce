import React from 'react'
import { useSession, signIn, signOut } from 'next-auth/react'
import Header from '@/components/header'
import { useRouter } from 'next/router';

const Auth = () => {

  const {data: session, status} = useSession()
  const router = useRouter();

  if (status === "loading") {
    // Handle the loading state, you might show a spinner or loading message here.
    return <div>Loading...</div>;
  }
  console.log(session)
  if (session) {
    router.push('/');
  } else {
    return(
      <>  
        <Header />
        <div className="tw-h-[calc(100vh-106px)] tw-w-screen tw-flex">
          <div className="tw-w-[50%] tw-h-[calc(100vh-106px)] tw-bg-black" style = {{backgroundImage: 'url("/img/accent.jpg")' , backgroundSize: 'cover'}}>
          </div>

          <div className='tw-w-[50%] tw-h-[calc(100vh-106px)] tw-flex tw-flex-col tw-items-center tw-gap-16 tw-pt-32'>
            <h2 className='tw-text-[2.5rem]'>Sign In</h2>
            <button onClick={() => signIn()} className="tw-h-[50px] tw-w-[130px] tw-px-9 tw-py-3 tw-border-solid tw-border-2 tw-border-black tw-rounded-md">Sign in</button>
          </div>
        </div>
      </>
     
    )
  }



}

export default Auth