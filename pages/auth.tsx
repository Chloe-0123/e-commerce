import React from 'react'
import { useSession, signIn, signOut } from 'next-auth/react'

const auth = () => {

  const {data: session, status} = useSession()

  if (status === "loading") {
    // Handle the loading state, you might show a spinner or loading message here.
    return <div>Loading...</div>;
  }
  console.log(session)
  if (session) {
    return (
      <div><p>Welcome, {session.user.name}</p>
      <button onClick={() => signOut()}>Sign out</button>
      </div>

    )
  } else {
    return(
      <div><p>You are not signed in</p>
      <button onClick={() => signIn()}>Sign in</button></div>
    )
  }



}

export default auth