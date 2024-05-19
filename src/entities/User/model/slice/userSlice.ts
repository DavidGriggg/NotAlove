import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { User, UserSchema } from "../types/user";
import { LOCAL_STORAGE_USER_KEY } from "@/shared/const/localStorage";

const initialState: UserSchema = {};

export const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        setAuthData: (state: UserSchema, action: PayloadAction<User>) => {
            state.authData = action.payload;
        },
        initAuthData: (state: UserSchema) => {
            const user = localStorage.getItem(LOCAL_STORAGE_USER_KEY);
            if (user) {
                state.authData = JSON.parse(user);
            }
        },
        logOut: (state: UserSchema) => {
            state.authData = undefined;
            localStorage.removeItem(LOCAL_STORAGE_USER_KEY);
        },
    },
});

export const { actions: userActions, reducer: userReducer } = userSlice;
