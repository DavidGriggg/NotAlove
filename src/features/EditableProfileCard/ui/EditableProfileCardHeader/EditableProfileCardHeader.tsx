import { memo, useCallback } from "react";
import { classNames } from "@/shared/lib/classNames/classNames";
import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";
import { getUserAuthData } from "@/entities/User";
import { getProfileData } from "../../model/selectors/getProfileData/getProfileData";
import { getProfileReadOnly } from "../../model/selectors/getProfileReadOnly/getProfileReadOnly";
import { profileActions } from "../../model/slice/profileSlice";
import { Flex } from "@/shared/ui/Flex";
import { Text } from "@/shared/ui/Text";
import { Button } from "@/shared/ui/Button";
import { updateProfileData } from "../../model/services/updateProfileData/updateProfileData";
import { Card } from "@/shared/ui/Card";
import { useAppDispatch } from "@/shared/hooks/useAppDispatch/useAppDispatch";

interface EditableProfileCardHeaderProps {
    className?: string;
}

export const EditableProfileCardHeader = memo(
    ({ className }: EditableProfileCardHeaderProps) => {
        const { t } = useTranslation();
        const dispatch = useAppDispatch();

        const readOnly = useSelector(getProfileReadOnly);
        const authData = useSelector(getUserAuthData);
        const profileData = useSelector(getProfileData);
        const canEdit = authData?.id === profileData?.id;

        const onEdit = useCallback(() => {
            dispatch(profileActions.setReadOnly(false));
        }, [dispatch]);

        const onCancelEdit = useCallback(() => {
            dispatch(profileActions.cancelEdit());
        }, [dispatch]);

        const onSave = useCallback(() => {
            // @ts-ignore
            dispatch(updateProfileData());
        }, [dispatch]);

        return (
            <Card padding="24" border="partial" fullWidth>
                <Flex
                    className={classNames("", {}, [className])}
                    direction="row"
                    justify="between"
                    max
                >
                    <Text title={t("shared:pages.profile")} />
                    {canEdit && (
                        <>
                            {readOnly ? (
                                <Button
                                    onClick={onEdit}
                                    data-testId="EditableProfileCardHeader.EditButton"
                                >
                                    {t("shared:actions.edit")}
                                </Button>
                            ) : (
                                <Flex direction="row" gap="8">
                                    <Button
                                        color="error"
                                        onClick={onCancelEdit}
                                        data-testId="EditableProfileCardHeader.CancelButton"
                                    >
                                        {t("shared:actions.cancel")}
                                    </Button>
                                    <Button
                                        color="success"
                                        onClick={onSave}
                                        data-testId="EditableProfileCardHeader.SaveButton"
                                    >
                                        {t("shared:actions.save")}
                                    </Button>
                                </Flex>
                            )}
                        </>
                    )}
                </Flex>
            </Card>
        );
    }
);
