import React from "react"
import { Navigate, useNavigate } from "react-router-dom"
import { UserDataContext } from "../context/UserContext"
import axios from "axios";

interface ProtectedRouteProps {
    children: React.ReactNode;
}

export default function UserProtectedRoute({ children }: ProtectedRouteProps) {
    const token = localStorage.getItem("token")
    const navigate = useNavigate()
    const { setUser } = React.useContext(UserDataContext)
    const [isLoading, setIsLoading] = React.useState<boolean>(true)

    if (!token) {
        return <Navigate to="/login" />
    }

    axios.get(`${import.meta.env.VITE_BASE_URL}/users/profile`, {
        headers: {
            Authorization: `Bearer ${token}`
        }
    }).then((res) => {
        if (res.status === 200) {
            setUser(res.data)
            setIsLoading(false)
        }
    }).catch((err) => {
        console.log(err)
        localStorage.removeItem("token")
        navigate("/login")
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
