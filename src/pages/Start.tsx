import { Link } from "react-router-dom"

export default function Start() {
    return (
        <div>
            <div className="w-full h-screen flex flex-col justify-between pt-8 bg-[url('/images/light.jpg')] bg-cover bg-center">
                <img
                    className="w-16 ml-8"
                    src="/images/uber_logo.png"
                    alt="uber logo"
                />

                <div className="bg-white py-5 px-5 pb-8">
                    <h2 className="text-3xl font-bold">Get Started with Uber</h2>
                    <Link className="flex items-center justify-center w-full bg-black text-white py-3 rounded-lg mt-4"
                        to="/login"
                    >Continue</Link>
                </div>
            </div>
        </div>
    )
}
