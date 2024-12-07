import React from "react"
import { UserData } from "../lib/types/Data";

export interface UserContextType {
    user: UserData;
    setUser: React.Dispatch<React.SetStateAction<UserData>>;
}

export const defaultUserContext: UserContextType = {
    user: {
        fullname: {
            firstname: "",
            lastname: "",
        },
        email: "",
    },
    setUser: () => { },
}

export const UserDataContext = React.createContext<UserContextType>(defaultUserContext)

interface UserContextProps {
    children: React.ReactNode;
}

export default function UserContext({ children }: UserContextProps) {

    const [user, setUser] = React.useState<UserData>({
        fullname: {
            firstname: "",
            lastname: "",
        },
        email: "",
    })

    return (
        <UserDataContext.Provider value={{ user, setUser }}>
            {children}
        </UserDataContext.Provider>
    )
}
