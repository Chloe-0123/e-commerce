import { createContext, useState } from "react";

export const UserContext = createContext({})


export function UserContextProvider({children}:any) {
    const [user, setUser] = useState(0)

    return (
        <UserContext.Provider value={{user, setUser}}>
            {children}
        </UserContext.Provider>
    )
}