import axios from "axios"
import React from "react"
import { Navigate, useNavigate } from "react-router-dom"

export default function DriverLogout() {
    const token = localStorage.getItem("token")
    const navigate = useNavigate()
    const [isLoading, setIsLoading] = React.useState<boolean>(true)

    if (!token) {
        return <Navigate to="/driver-login" />
    }

    React.useEffect(() => {
        axios.get(`${import.meta.env.VITE_BASE_URL}/drivers/logout`, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        }).then((res) => {
            if (res.status === 200) {
                localStorage.removeItem("token")
                setIsLoading(false)
            }
        }).catch((err) => {
            console.log(err)
            navigate("/driver-home")
        })
    }, [])

    if (isLoading) {
        return <div>Driver Logging out...</div>
    }

    return <Navigate to="/driver-login" />
}
