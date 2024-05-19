import { configureStore, ReducersMapObject } from "@reduxjs/toolkit";
import { StateSchema } from "../types/StateSchema";
import { userReducer } from "@/entities/User";
import { loginReducer } from "@/features/Auth";
import { profileReducer } from "@/features/EditableProfileCard";
import { $api } from "@/shared/api/api";

export function createReduxStore(initialState?: StateSchema) {
    const rootReducer: ReducersMapObject<StateSchema> = {
        user: userReducer,
        loginForm: loginReducer,
        profile: profileReducer,
    };
    return configureStore<StateSchema>({
        reducer: rootReducer,
        devTools: __IS_DEV__,
        preloadedState: initialState,
        // @ts-ignore
        middleware: (getDefaultMiddleware) =>
            getDefaultMiddleware({
                thunk: {
                    extraArgument: {
                        api: $api,
                    },
                },
            }),
    });
}

export type AppDispatch = ReturnType<typeof createReduxStore>["dispatch"];
