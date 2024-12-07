import React from "react"
import { Link } from "react-router-dom";
import { LoginData } from "../lib/types/Data";

export default function UserLogin() {
    const [userData, setUserData] = React.useState<LoginData>({
        email: "",
        password: "",
    })

    const handleData = (e: React.ChangeEvent<HTMLInputElement>) => {
        setUserData({ ...userData, [e.target.name]: e.target.value })
    }

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()

        console.log(userData)

        setUserData({
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
                        value={userData.email}
                        onChange={(e) => handleData(e)}
                    />

                    <h3 className="text-lg font-medium mb-2">Enter password</h3>
                    <input
                        className="bg-[#eeeeee] px-4 py-2 border rounded-lg w-full text-lg placeholder:text-base mb-7"
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
                        Login
                    </button>
                </form>

                <p className="text-center">
                    New here? <Link
                        to="/signup"
                        className="text-blue-600"
                    >
                        Create new Account
                    </Link>
                </p>
            </div>

            <div>
                <Link
                    to="/driver-login"
                    className="flex items-center justify-center bg-[#10b461] text-white font-semibold rounded-lg w-full text-lg mb-4 py-2"
                >
                    Sign in as Driver
                </Link>
            </div>
        </div>
    )
}
