import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { LoginSchema } from "../types/login";
import { login } from "../services/login";

const initialState: LoginSchema = {
    username: "",
    password: "",
    isLoading: false,
};

export const loginSlice = createSlice({
    name: "login",
    initialState,
    reducers: {
        setUsername: (state: LoginSchema, action: PayloadAction<string>) => {
            state.username = action.payload;
        },
        setPassword: (state: LoginSchema, action: PayloadAction<string>) => {
            state.password = action.payload;
        },
        resetData: (state: LoginSchema) => {
            state.username = "";
            state.password = "";
            state.error = undefined;
        },
    },
    extraReducers: (builder) => {
        builder.addCase(login.pending, (state: LoginSchema) => {
            state.isLoading = true;
            state.error = undefined;
        });
        builder.addCase(login.fulfilled, (state: LoginSchema) => {
            state.isLoading = false;
        });
        builder.addCase(login.rejected, (state: LoginSchema, action) => {
            state.isLoading = false;
            state.error = action.payload as string;
        });
    },
});

export const { actions: loginActions, reducer: loginReducer } = loginSlice;
