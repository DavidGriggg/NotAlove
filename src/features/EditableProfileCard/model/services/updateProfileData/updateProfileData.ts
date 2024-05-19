import { createAsyncThunk } from "@reduxjs/toolkit";
import { getProfileForm } from "../../selectors/getProfileForm/getProfileForm";
import { validateProfileData } from "../validateProfileData/validateProfileData";
import { ValidateProfileError } from "../../consts/consts";
import { Profile } from "@/entities/Profile";
import { ThunkConfig } from "@/app/providers/StoreProvider/model/types/StateSchema";

export const updateProfileData = createAsyncThunk<
    Profile,
    void,
    ThunkConfig<ValidateProfileError[]>
>("profile/updateProfileData", async (_, thunkApi) => {
    const formData = getProfileForm(thunkApi.getState());
    const errors = validateProfileData(formData);

    if (errors.length) {
        return thunkApi.rejectWithValue(errors);
    }

    try {
        const response = await thunkApi.extra.api.put<Profile>(
            `/profile/${formData?.id}`,
            formData
        );

        return response.data;
    } catch (e) {
        console.log(e);
        return thunkApi.rejectWithValue([ValidateProfileError.SERVER_ERROR]);
    }
});
