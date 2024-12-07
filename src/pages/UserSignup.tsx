import React from "react"
import { Link, useNavigate } from "react-router-dom"
import { RegisterUserData } from "../lib/types/Data"
import axios from "axios"
import { UserDataContext } from "../context/UserContext"

export default function UserSignup() {

    const navigate = useNavigate()
    const [userData, setUserData] = React.useState<RegisterUserData>({
        fullname: {
            firstname: "",
            lastname: "",
        },
        email: "",
        password: "",
    })

    const { setUser } = React.useContext(UserDataContext)

    // function to handle logic
    const handleData = (e: React.ChangeEvent<HTMLInputElement>) => {
        setUserData({
            ...userData,
            [e.target.name]: e.target.value,
        })
    }

    const handleName = (e: React.ChangeEvent<HTMLInputElement>) => {
        setUserData({
            ...userData,
            fullname: {
                ...userData.fullname,
                [e.target.name]: e.target.value
            }
        })
    }

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()

        const res = await axios.post(`${import.meta.env.VITE_BASE_URL}/users/register`, {
            ...userData
        })

        if (res.status === 201) {
            if (res.data?.user && res.data?.token) {
                setUser(res.data?.user)
                localStorage.setItem("token", res.data.token)
                navigate("/home")
            }
        }

        setUserData({
            fullname: {
                firstname: "",
                lastname: "",
            },
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
                    <h3 className="text-base font-medium mb-2">What's your name?</h3>
                    <div className="flex gap-4 mb-5">
                        <input
                            className="bg-[#eeeeee] px-4 py-2 border rounded-lg w-full text-lg placeholder:text-base"
                            type="text"
                            placeholder="First Name"
                            name="firstname"
                            required
                            value={userData.fullname.firstname}
                            onChange={(e) => handleName(e)}
                        />

                        <input
                            className="bg-[#eeeeee] px-4 py-2 border rounded-lg w-full text-lg placeholder:text-base"
                            type="text"
                            placeholder="Last Name"
                            name="lastname"
                            required
                            value={userData.fullname.lastname}
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
                        value={userData.email}
                        onChange={(e) => handleData(e)}
                    />

                    <h3 className="text-base font-medium mb-2">Enter password</h3>
                    <input
                        className="bg-[#eeeeee] px-4 py-2 border rounded-lg w-full text-lg placeholder:text-base mb-5"
                        type="password"
                        placeholder="password"
                        name="password"
                        required
                        value={userData.password}
                        onChange={(e) => handleData(e)}
                    />

                    <button
                        className="bg-[#111] text-white font-semibold rounded-lg w-full text-lg mb-4 py-2"
                    >
                        Create account
                    </button>
                </form>

                <p className="text-center">
                    Already have a account? <Link
                        to="/login"
                        className="text-blue-600"
                    >
                        Login Here
                    </Link>
                </p>
            </div>

            <div>
                <p className="text-xs">
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
