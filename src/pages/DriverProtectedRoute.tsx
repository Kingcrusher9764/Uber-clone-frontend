import axios from "axios";
import React from "react"
import { Navigate, useNavigate } from "react-router-dom"
import { DriverDataContext } from "../context/DriverContext"

interface ProtectedRouteProps {
    children: React.ReactNode;
}

export default function DriverProtectedRoute({ children }: ProtectedRouteProps) {
    const token = localStorage.getItem("token")
    const navigate = useNavigate()
    const { setDriver } = React.useContext(DriverDataContext)
    const [isLoading, setIsLoading] = React.useState<boolean>(true)

    if (!token) {
        return <Navigate to="/driver-login" />
    }

    axios.get(`${import.meta.env.VITE_BASE_URL}/drivers/profile`, {
        headers: {
            Authorization: `Bearer ${token}`
        }
    }).then((res) => {
        if (res.status === 200) {
            setDriver(res.data)
            setIsLoading(false)
        }
    }).catch((err) => {
        console.log(err)
        localStorage.removeItem("token")
        navigate("/driver-login")
    })

    if (isLoading) {
        return (
            <div>Loading...</div>
        )
    }


    return (
        <>
            {children}
        </>
    )
}
