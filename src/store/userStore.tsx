import { create } from "zustand";

import { UserState } from "../types";


export const userStore = create<UserState>((set) => {
    return {
        user: null,
        registerError: null,
        loginError: null,
        changeErrorState: ((errorMessage) => {
            set(state => ({ ...state, registerError: errorMessage }))
        })
    }
})