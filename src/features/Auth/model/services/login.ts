import { createAsyncThunk } from "@reduxjs/toolkit";
import { User, userActions } from "@/entities/User";
import { LOCAL_STORAGE_USER_KEY } from "@/shared/const/localStorage";
import { ThunkConfig } from "@/app/providers/StoreProvider/model/types/StateSchema";

interface LoginProps {
    username: string;
    password: string;
}

export const login = createAsyncThunk<User, LoginProps, ThunkConfig<string>>(
    "login/login",
    async (authData, { extra, dispatch, rejectWithValue }) => {
        try {
            const response = await extra.api.post<User>("/login", authData);

            dispatch(userActions.setAuthData(response?.data));
            localStorage.setItem(
                LOCAL_STORAGE_USER_KEY,
                JSON.stringify(response?.data)
            );

            return response?.data;
        } catch (e) {
            console.log(e);
            return rejectWithValue("shared:auth.authIncorrect");
        }
    }
);
