import { SessionProvider } from "next-auth/react"
import { CartContextProvider } from "@/components/CartContext";
import { UserContextProvider } from "@/components/UserContext"

export default function App({
  Component, pageProps: { session, ...pageProps }
}) {
  return (
    <SessionProvider session={session}>
      <UserContextProvider>

      
     <CartContextProvider>
      <Component {...pageProps}/>
     </CartContextProvider>
      
     </UserContextProvider>
      
    </SessionProvider>
  )
}