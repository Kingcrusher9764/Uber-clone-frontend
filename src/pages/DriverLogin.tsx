import React from "react"
import { Link, useNavigate } from "react-router-dom"
import { LoginData } from "../lib/types/Data"
import axios from "axios"
import { DriverDataContext } from "../context/DriverContext"

export default function DriverLogin() {
    const navigate = useNavigate()
    const { setDriver } = React.useContext(DriverDataContext)
    const [driverData, setDriverData] = React.useState<LoginData>({
        email: "",
        password: "",
    })

    const handleData = (e: React.ChangeEvent<HTMLInputElement>) => {
        setDriverData({ ...driverData, [e.target.name]: e.target.value })
    }

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()

        const res = await axios.post(`${import.meta.env.VITE_BASE_URL}/drivers/login`, driverData)

        if (res.status === 200) {
            if (res.data?.driver && res.data?.token) {
                setDriver(res.data?.driver)
                localStorage.setItem("token", res.data.token)
                navigate("/driver-home")
            }
        }

        setDriverData({
            email: "",
            password: "",
        })
    }

    return (
        <div className="p-7 flex flex-col h-screen justify-between">
            <div>
                <img
                    className="w-16 mb-10"
                    src="/images/uber_logo.png"
                    alt="uber logo"
                />

                <form
                    onSubmit={(e) => handleSubmit(e)}
                >
                    <h3 className="text-lg font-medium mb-2">What's your email?</h3>
                    <input
                        className="bg-[#eeeeee] px-4 py-2 border rounded-lg w-full text-lg placeholder:text-base mb-7"
                        type="email"
                        placeholder="email@example.com"
                        name="email"
                        required
                        value={driverData.email}
                        onChange={(e) => handleData(e)}
                    />

                    <h3 className="text-lg font-medium mb-2">Enter password</h3>
                    <input
                        className="bg-[#eeeeee] px-4 py-2 border rounded-lg w-full text-lg placeholder:text-base mb-7"
                        type="password"
                        placeholder="password"
                        name="password"
                        required
                        value={driverData.password}
                        onChange={(e) => handleData(e)}
                    />

                    <button
                        className="bg-[#111] text-white font-semibold rounded-lg w-full text-lg mb-4 py-2"
                    >
                        Login
                    </button>
                </form>

                <p className="text-center">
                    Join a fleet? <Link
                        to="/driver-signup"
                        className="text-blue-600"
                    >
                        Register as a driver
                    </Link>
                </p>
            </div>

            <div>
                <Link
                    to="/login"
                    className="flex items-center justify-center bg-[#d5622d] text-white font-semibold rounded-lg w-full text-lg mb-4 py-2"
                >
                    Sign in as User
                </Link>
            </div>
        </div>
    )
}
