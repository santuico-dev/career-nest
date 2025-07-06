import { createSlice } from "@reduxjs/toolkit";

export const authSlice = createSlice({
    name: "auth",
    initialState: {
        loginData: {},
        registrationData: {},
        forgetPasswordData: {},
    },
    reducers: {
        loginUser: (state, action) => {

        },
        registerUser(state, action) {

        },
        forgotPassword(state, action) {

        }
    }
});

export const { loginUser, registerUser, forgotPassword } =  authSlice.actions;

export default authSlice.reducer;
