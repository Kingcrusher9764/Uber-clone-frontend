export interface LoginData {
    email: string;
    password: string;
}

export interface RegisterData {
    fullName: {
        firstname: string;
        lastname: string;
    }
    email: string;
    password: string;
}

export interface UserData {
    fullName: {
        firstname: string;
        lastname: string;
    }
    email: string;
}
