import axios, { AxiosRequestConfig } from "axios";
import { LOCAL_STORAGE_USER_KEY } from "@/shared/const/localStorage";

// @ts-ignore
export const $api = axios.create({
    baseURL: __API__,
});

// @ts-ignore
$api.interceptors.request.use((config: AxiosRequestConfig) => {
    if (config.headers) {
        config.headers.Authorization =
            localStorage.getItem(LOCAL_STORAGE_USER_KEY) || "";
    }
    return config;
});
