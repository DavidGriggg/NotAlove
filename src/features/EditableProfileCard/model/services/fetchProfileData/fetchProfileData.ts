import { createAsyncThunk } from "@reduxjs/toolkit";
import i18n from "@/shared/config/i18n/i18n";
import { Profile } from "@/entities/Profile";
import { ThunkConfig } from "@/app/providers/StoreProvider/model/types/StateSchema";

export const fetchProfileData = createAsyncThunk<
    Profile,
    string,
    ThunkConfig<string>
>("profile/fetchProfileData", async (profileId, thunkApi) => {
    try {
        const response = await thunkApi.extra.api.get<Profile>(
            `/profile/${profileId}`
        );

        return response.data;
    } catch (e) {
        console.log(e);
        return thunkApi.rejectWithValue(i18n.t("authIncorrect"));
    }
});
