import { UserSchema } from "@/entities/User";
import { LoginSchema } from "@/features/Auth";
import { ProfileSchema } from "@/features/EditableProfileCard";
import { AxiosInstance } from "axios";

export interface StateSchema {
    user: UserSchema;
    loginForm: LoginSchema;
    profile: ProfileSchema;
}

export interface ThunkExtraArg {
    api: AxiosInstance;
}

export interface ThunkConfig<T> {
    rejectValue: T;
    extra: ThunkExtraArg;
    state: StateSchema;
}
