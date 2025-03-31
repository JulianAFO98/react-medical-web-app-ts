
export interface User {
    firstname: string,
    lastname: string,
    email: string,
}

export interface UserState {
    user: User | null,
    registerError: string | null,
    loginError: string | null,
    changeErrorState: (errorMessage: string | null) => void
}

export interface RegisterResponse {
    message: string;
    object: Object;
    status: string;
}

export interface FormProps {
    form: HTMLFormElement
}


