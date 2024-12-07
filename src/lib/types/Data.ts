export interface LoginData {
    email: string;
    password: string;
}

export interface RegisterUserData {
    fullname: {
        firstname: string;
        lastname: string;
    }
    email: string;
    password: string;
}

export interface RegisterDriverData {
    fullname: {
        firstname: string;
        lastname: string;
    }
    email: string;
    password: string;
    vehicle: {
        color: string;
        plate: string;
        capacity: number;
        vehicleType: string;
    }
}

export interface UserData {
    fullname: {
        firstname: string;
        lastname: string;
    }
    email: string;
}

export interface DriverData {
    fullname: {
        firstname: string;
        lastname: string;
    }
    email: string;
    vehicle: {
        color: string;
        plate: string;
        capacity: number;
        vehicleType: string;
    }
}
