import React from "react"
import { Navigate, useNavigate } from "react-router-dom"
import axios from "axios"

export default function UserLogout() {
    const token = localStorage.getItem("token")
    const navigate = useNavigate()
    const [isLoading, setIsLoading] = React.useState<boolean>(true)

    if (!token) {
        return <Navigate to="/login" />
    }

    React.useEffect(() => {
        axios.get(`${import.meta.env.VITE_BASE_URL}/users/logout`, {
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
            navigate("/home")
        })
    }, [])

    if (isLoading) {
        return (
            <div>User Logging out...</div>
        )
    }

    return (
        <Navigate to="/login" />
    )
}
