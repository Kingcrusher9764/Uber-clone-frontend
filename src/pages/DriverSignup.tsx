import React from "react"
import { Link, useNavigate } from "react-router-dom"
import { RegisterDriverData } from "../lib/types/Data"
import axios from "axios"
import { DriverDataContext } from "../context/DriverContext"

export default function DriverSignup() {
    const { setDriver } = React.useContext(DriverDataContext)
    const navigate = useNavigate()
    const [driverData, setDriverData] = React.useState<RegisterDriverData>({
        fullname: {
            firstname: "",
            lastname: "",
        },
        email: "",
        password: "",
        vehicle: {
            color: "",
            plate: "",
            capacity: 0,
            vehicleType: "",
        },
    })

    const handleData = (e: React.ChangeEvent<HTMLInputElement>) => {
        setDriverData({
            ...driverData,
            [e.target.name]: e.target.value,
        })
    }

    const handleName = (e: React.ChangeEvent<HTMLInputElement>) => {
        setDriverData({
            ...driverData,
            fullname: {
                ...driverData.fullname,
                [e.target.name]: e.target.value
            }
        })
    }

    const handleVehicle = (e: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLSelectElement>) => {
        setDriverData({
            ...driverData,
            vehicle: {
                ...driverData.vehicle,
                [e.target.name]: e.target.value,
            }
        })
    }

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()

        const res = await axios.post(`${import.meta.env.VITE_BASE_URL}/drivers/register`, driverData)

        if (res.status === 201) {
            if (res.data?.driver && res.data?.token) {
                localStorage.setItem("token", res.data.token)
                setDriver(res.data.driver)
                navigate("/driver-home")
            }
        }

        setDriverData({
            fullname: {
                firstname: "",
                lastname: "",
            },
            email: "",
            password: "",
            vehicle: {
                color: "",
                plate: "",
                capacity: 0,
                vehicleType: "",
            },
        })
    }

    return (
        <div className="p-7 flex flex-col gap-10 h-screen justify-between">
            <div>
                <img
                    className="w-16 mb-10"
                    src="/images/uber_logo.png"
                    alt="uber logo"
                />

                <form
                    onSubmit={(e) => handleSubmit(e)}
                >
                    <h3 className="text-base font-medium mb-2">What's your name?</h3>
                    <div className="flex gap-4 mb-5">
                        <input
                            className="bg-[#eeeeee] px-4 py-2 border rounded-lg w-full text-lg placeholder:text-base"
                            type="text"
                            placeholder="First Name"
                            name="firstname"
                            required
                            value={driverData.fullname.firstname}
                            onChange={(e) => handleName(e)}
                        />

                        <input
                            className="bg-[#eeeeee] px-4 py-2 border rounded-lg w-full text-lg placeholder:text-base"
                            type="text"
                            placeholder="Last Name"
                            name="lastname"
                            required
                            value={driverData.fullname.lastname}
                            onChange={(e) => handleName(e)}
                        />
                    </div>

                    <h3 className="text-base font-medium mb-2">What's your email?</h3>
                    <input
                        className="bg-[#eeeeee] px-4 py-2 border rounded-lg w-full text-lg placeholder:text-base mb-5"
                        type="email"
                        placeholder="email@example.com"
                        name="email"
                        required
                        value={driverData.email}
                        onChange={(e) => handleData(e)}
                    />

                    <h3 className="text-base font-medium mb-2">Enter password</h3>
                    <input
                        className="bg-[#eeeeee] px-4 py-2 border rounded-lg w-full text-lg placeholder:text-base mb-5"
                        type="password"
                        placeholder="password"
                        name="password"
                        required
                        value={driverData.password}
                        onChange={(e) => handleData(e)}
                    />

                    <h3 className="text-base font-medium mb-2">Enter vehicle color</h3>
                    <input
                        className="bg-[#eeeeee] px-4 py-2 border rounded-lg w-full text-lg placeholder:text-base mb-5"
                        type="text"
                        placeholder="e.g. red"
                        name="color"
                        required
                        value={driverData.vehicle.color}
                        onChange={(e) => handleVehicle(e)}
                    />

                    <h3 className="text-base font-medium mb-2">Enter vehicle plate</h3>
                    <input
                        className="bg-[#eeeeee] px-4 py-2 border rounded-lg w-full text-lg placeholder:text-base mb-5"
                        type="text"
                        placeholder="e.g. MH01234"
                        name="plate"
                        required
                        value={driverData.vehicle.plate}
                        onChange={(e) => handleVehicle(e)}
                    />

                    <h3 className="text-base font-medium mb-2">Enter vehicle capacity</h3>
                    <input
                        className="bg-[#eeeeee] px-4 py-2 border rounded-lg w-full text-lg placeholder:text-base mb-5"
                        type="number"
                        placeholder="e.g. 2"
                        name="capacity"
                        required
                        value={driverData.vehicle.capacity}
                        onChange={(e) => handleVehicle(e)}
                    />

                    <h3 className="text-base font-medium mb-2">Enter vehicle type</h3>
                    <select
                        className="bg-[#eeeeee] px-4 py-2 border rounded-lg w-full text-lg placeholder:text-base mb-5"
                        name="vehicleType"
                        required
                        value={driverData.vehicle.vehicleType}
                        onChange={(e) => handleVehicle(e)}
                    >
                        <option value="" >Select Type</option>
                        <option value="car" >Car</option>
                        <option value="auto" >Auto</option>
                        <option value="motorcycle" >MotorCycle</option>
                    </select>

                    <button
                        className="bg-[#111] text-white font-semibold rounded-lg w-full text-lg mb-4 py-2"
                    >
                        Create driver account
                    </button>
                </form>

                <p className="text-center">
                    Already have a account? <Link
                        to="/driver-login"
                        className="text-blue-600"
                    >
                        Login Here
                    </Link>
                </p>
            </div>

            <div>
                <p className="text-xs mb-5">
                    By signing up, you agree to our <span className="underline text-blue-600">
                        Terms of Service
                    </span> and <span className="underline text-blue-600">
                        Privacy Policy
                    </span>.
                </p>
            </div>
        </div>
    )
}
