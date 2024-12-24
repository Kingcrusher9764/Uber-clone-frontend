import React from "react"
import { useGSAP } from "@gsap/react"
import gsap from "gsap"
import LocationSearchPanel from "../components/LocationSearchPanel"

export default function Home() {
    const panelRef = React.useRef(null)
    const panelCloseRef = React.useRef(null)
    const [panelOpen, setPanelOpen] = React.useState<boolean>(false)
    const [locaitonData, setLocationData] = React.useState({
        pickup: "",
        destination: "",
    })

    // functionality 
    const handlePanel = (value: boolean) => {
        setPanelOpen(value)
    }

    const handleLocationData = (e: React.ChangeEvent<HTMLInputElement>) => {
        setLocationData({ ...locaitonData, [e.target.name]: e.target.value })
    }

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
    }

    // animation
    useGSAP(() => {
        if (panelOpen == true) {
            gsap.to(panelRef.current, {
                height: "70%",
            })

            gsap.to(panelCloseRef.current, {
                opacity: 1,
            })
        } else {
            gsap.to(panelRef.current, {
                height: "0%",
            })

            gsap.to(panelCloseRef.current, {
                opacity: 0,
            })
        }
    }, [panelOpen])

    return (
        <div className="h-screen relative">
            <img
                className="w-16 absolute left-5 top-5"
                src="/images/uber_logo.png"
                alt="uber logo"
            />

            <div className="h-screen w-screen">
                <img
                    className="w-full h-full object-cover object-center"
                    src="/images/map.jpg"
                    alt="uber map"
                />
            </div>

            <div className="h-screen absolute top-0 w-full flex flex-col justify-end">
                <div className="h-[30%] p-5 bg-white">
                    <div className="flex justify-between items-center">
                        <h4 className="text-2xl font-semibold">Find a trip</h4>

                        <h5
                            className="w-6 cursor-pointer font-semibold"
                            onClick={() => handlePanel(false)}
                            ref={panelCloseRef}
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M12 15.6315L20.9679 10.8838L20.0321 9.11619L12 13.3685L3.9679 9.11619L3.03212 10.8838L12 15.6315Z"></path></svg>
                        </h5>
                    </div>

                    <form
                        onSubmit={(e) => handleSubmit(e)}
                        className="relative"
                    >
                        {/* line element */}
                        <div className="absolute h-12 w-1 bg-gray-900 top-1/2 -translate-y-1/3 left-5 rounded-full"></div>

                        <input
                            value={locaitonData.pickup}
                            onChange={(e) => handleLocationData(e)}
                            onClick={() => handlePanel(true)}
                            name="pickup"
                            type="text"
                            className="bg-[#eee] px-12 py-2 rounded-lg w-full mt-5"
                            placeholder="Add a pick-up location"
                        />

                        <input
                            value={locaitonData.destination}
                            onChange={(e) => handleLocationData(e)}
                            onClick={() => handlePanel(true)}
                            name="destination"
                            type="text"
                            className="bg-[#eee] px-12 py-2 rounded-lg w-full mt-4"
                            placeholder="Enter your destination"
                        />
                    </form>
                </div>

                <div
                    ref={panelRef}
                    className="bg-white h-0 overflow-hidden"
                >
                    <LocationSearchPanel />
                </div>
            </div>
        </div>
    )
}
