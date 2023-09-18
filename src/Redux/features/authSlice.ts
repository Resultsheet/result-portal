import { createSlice, PayloadAction } from "@reduxjs/toolkit"

type userType = {
    uid: string,
    first_name: string,
    last_name: string,
    email: string,
    role: string,
}

const initialState = {
    uid: "",
    first_name: "",
    last_name: "",
    email: "",
    role: "",
}

const authSlice = createSlice({
    name: "auth",
    initialState: initialState,
    reducers: {
        setUser: (state, action: PayloadAction<userType>) => {
            state.uid = action.payload.uid
            state.first_name = action.payload.first_name
            state.last_name = action.payload.last_name
            state.email = action.payload.email
            state.role = action.payload.role

        },
        removeUser: (state) => {
            state.uid = ""
            state.first_name = ""
            state.last_name = ""
            state.email = ""
            state.role = ""
        }

    },
})

export const { setUser, removeUser } = authSlice.actions
export const authReducer = authSlice.reducer
