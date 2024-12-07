import { Navigate, useNavigate } from "react-router-dom"
import axios from "axios"

export default function UserLogout() {
    const token = localStorage.getItem("token")
    const navigate = useNavigate()

    axios.get(`${import.meta.env.VITE_BASE_URL}/users/logout`, {
        headers: {
            Authorization: `Bearer ${token}`
        }
    }).then((res) => {
        if (res.status === 200) {
            localStorage.removeItem("token")
            navigate("/login")
        }
    })

    if (!token) {
        return <Navigate to="/login" />
    }

    return (
        <div>User Logging out</div>
    )
}
