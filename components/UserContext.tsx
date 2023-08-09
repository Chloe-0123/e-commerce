import { createContext, useState, ReactNode } from "react";

interface User {
    user: number
    setUser: React.Dispatch<React.SetStateAction<number>>;
}

export const UserContext = createContext<User>({ user: 0 , setUser:() => {}})


export function UserContextProvider({children}:{ children: ReactNode }) {
    const [user, setUser] = useState(0)

    return (
        <UserContext.Provider value={{user, setUser}}>
            {children}
        </UserContext.Provider>
    )
}