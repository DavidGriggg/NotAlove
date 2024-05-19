import { classNames } from "@/shared/lib/classNames/classNames";
import { useTranslation } from "react-i18next";
import { memo, useCallback, useEffect } from "react";
import { useSelector } from "react-redux";
import { Text } from "@/shared/ui/Text";
import { getProfileForm } from "../../model/selectors/getProfileForm/getProfileForm";
import { getProfileIsLoading } from "../../model/selectors/getProfileIsLoading/getProfileIsLoading";
import { getProfileError } from "../../model/selectors/getProfileError/getProfileError";
import { getProfileReadOnly } from "../../model/selectors/getProfileReadOnly/getProfileReadOnly";
import { getProfileValidateErrors } from "../../model/selectors/getProfileValidateErrors/getProfileValidateErrors";
import { fetchProfileData } from "@/features/EditableProfileCard/model/services/fetchProfileData/fetchProfileData";
import { profileActions } from "../../model/slice/profileSlice";
import { ProfileCard } from "@/entities/Profile";
import { Profile } from "@/entities/Profile";
import { EditableProfileCardHeader } from "../EditableProfileCardHeader/EditableProfileCardHeader";
import { Flex } from "@/shared/ui/Flex";
import { useAppDispatch } from "@/shared/hooks/useAppDispatch/useAppDispatch";

interface EditableProfileCardProps {
    className?: string;
    id?: string;
}

export const EditableProfileCard = memo((props: EditableProfileCardProps) => {
    const { className, id } = props;
    const { t } = useTranslation();
    const dispatch = useAppDispatch();
    const formData = useSelector(getProfileForm);
    const isLoading = useSelector(getProfileIsLoading);
    const error = useSelector(getProfileError);
    const readOnly = useSelector(getProfileReadOnly);
    const validateErrors = useSelector(getProfileValidateErrors);

    useEffect(() => {
        // @ts-ignore
        dispatch(fetchProfileData(id));
    }, []);

    const onChangeFirstname = useCallback(
        (value?: string) => {
            dispatch(profileActions.updateProfile({ firstname: value || "" }));
        },
        [dispatch]
    );

    const onChangeLastname = useCallback(
        (value?: string) => {
            dispatch(profileActions.updateProfile({ lastname: value || "" }));
        },
        [dispatch]
    );

    const onChangeAge = useCallback(
        (value?: string) => {
            dispatch(profileActions.updateProfile({ age: Number(value || 0) }));
        },
        [dispatch]
    );

    const onChangeCity = useCallback(
        (value?: string) => {
            dispatch(profileActions.updateProfile({ city: value || "" }));
        },
        [dispatch]
    );

    const onChangeUsername = useCallback(
        (value?: string) => {
            dispatch(profileActions.updateProfile({ username: value || "" }));
        },
        [dispatch]
    );

    const onChangeAvatar = useCallback(
        (value?: string) => {
            dispatch(profileActions.updateProfile({ avatar: value || "" }));
        },
        [dispatch]
    );

    const onChangeCountry = useCallback(
        (value?: string) => {
            dispatch(profileActions.updateProfile({ country: value || "" }));
        },
        [dispatch]
    );

    return (
        <Flex
            direction="column"
            gap="8"
            max
            className={classNames("", {}, [className])}
        >
            <EditableProfileCardHeader />
            {validateErrors?.length &&
                validateErrors.map((err) => (
                    <Text
                        variant="error"
                        text={t(`shared:profile.errors.${err}`)}
                        key={err}
                    />
                ))}
            <ProfileCard
                data={formData as Profile}
                isLoading={isLoading}
                error={error}
                readOnly={Boolean(readOnly)}
                onChangeFirstname={onChangeFirstname}
                onChangeLastname={onChangeLastname}
                onChangeAge={onChangeAge}
                onChangeCity={onChangeCity}
                onChangeUsername={onChangeUsername}
                onChangeAvatar={onChangeAvatar}
                onChangeCountry={onChangeCountry}
            />
        </Flex>
    );
});
