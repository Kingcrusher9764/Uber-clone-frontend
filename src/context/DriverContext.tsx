import React from "react"
import { DriverData } from "../lib/types/Data";

export interface DriverContextType {
    driver: DriverData;
    setDriver: React.Dispatch<React.SetStateAction<DriverData>>;
}

export const defaultDriverContext: DriverContextType = {
    driver: {
        fullname: {
            firstname: "",
            lastname: "",
        },
        email: "",
        vehicle: {
            color: "",
            plate: "",
            capacity: 1,
            vehicleType: ""
        },
    },
    setDriver: () => { },
}

export const DriverDataContext = React.createContext<DriverContextType>(defaultDriverContext)

interface DriverContextProps {
    children: React.ReactNode;
}

export default function DriverContext({ children }: DriverContextProps) {
    const [driver, setDriver] = React.useState<DriverData>({
        fullname: {
            firstname: "",
            lastname: "",
        },
        email: "",
        vehicle: {
            color: "",
            plate: "",
            capacity: 1,
            vehicleType: ""
        },
    })

    return (
        <DriverDataContext.Provider value={{ driver, setDriver }}>
            {children}
        </DriverDataContext.Provider>
    )
}
