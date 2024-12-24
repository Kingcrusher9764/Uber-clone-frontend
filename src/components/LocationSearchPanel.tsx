
export default function LocationSearchPanel() {
    return (
        <div className="p-5">

            {/* sample data */}
            <Location location={"Someplace location number one "} />
            <Location location={"Someplace location number two "} />
            <Location location={"Someplace location number three "} />

        </div>
    )
}

export function Location({ location }: { location: string }) {
    return (
        <div className="flex items-center gap-4 my-4">
            <h2 className="w-10 p-2 rounded-full bg-[#eee]"><MapPin /></h2>
            <h4 className="font-medium">{location}</h4>
        </div>
    )
}

export function MapPin() {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
            <path d="M18.364 17.364L12 23.7279L5.63604 17.364C2.12132 13.8492 2.12132 8.15076 5.63604 4.63604C9.15076 1.12132 14.8492 1.12132 18.364 4.63604C21.8787 8.15076 21.8787 13.8492 18.364 17.364ZM12 15C14.2091 15 16 13.2091 16 11C16 8.79086 14.2091 7 12 7C9.79086 7 8 8.79086 8 11C8 13.2091 9.79086 15 12 15ZM12 13C10.8954 13 10 12.1046 10 11C10 9.89543 10.8954 9 12 9C13.1046 9 14 9.89543 14 11C14 12.1046 13.1046 13 12 13Z">
            </path>
        </svg>
    )
}
