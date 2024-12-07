import React from "react"
import { UserData } from "../lib/types/Data";

interface UserContextType {
    user: UserData;
    setUser: React.Dispatch<React.SetStateAction<UserData>>;
}

const defaultUserContext: UserContextType = {
    user: {
        fullName: {
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
        fullName: {
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
