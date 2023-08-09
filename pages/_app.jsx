import { SessionProvider } from "next-auth/react"
import { CartContextProvider } from "@/components/CartContext";
import { UserContextProvider } from "@/components/UserContext"
import { Cormorant } from 'next/font/google'

const cormorant = Cormorant({ subsets: ['latin'] })

export default function App({
  Component, pageProps: { session, ...pageProps }
}) {
  return (
    <>
    <style jsx global>{`
        html {
          font-family: ${cormorant.style.fontFamily};
        }
      `}</style>
    <SessionProvider session={session}>
      <UserContextProvider>

      
     <CartContextProvider>
      <Component {...pageProps}/>
     </CartContextProvider>
      
     </UserContextProvider>
      
    </SessionProvider>
    
    </>
    
  )
}