import cls from "./ProfileCard.module.scss";
import { classNames } from "@/shared/lib/classNames/classNames";
import { useTranslation } from "react-i18next";
import { Profile } from "@/entities/Profile";
import { Text } from "@/shared/ui/Text";
import { Input } from "@/shared/ui/Input";
import { Avatar } from "@/shared/ui/Avatar";
import { Flex } from "@/shared/ui/Flex";
import { Card } from "@/shared/ui/Card";
import { Skeleton } from "@/shared/ui/Skeleton";
import { CountrySelect } from "@/entities/Country";

interface ProfileCardProps {
    className?: string;
    data?: Profile;
    error?: string;
    isLoading?: boolean;
    readOnly?: boolean;
    onChangeFirstname: (value?: string) => void;
    onChangeLastname: (value?: string) => void;
    onChangeAge: (value?: string) => void;
    onChangeCity: (value?: string) => void;
    onChangeUsername: (value?: string) => void;
    onChangeAvatar: (value?: string) => void;
    onChangeCountry: (value?: string) => void;
}

export const ProfileCard = (props: ProfileCardProps) => {
    const {
        className,
        data,
        isLoading,
        error,
        readOnly,
        onChangeFirstname,
        onChangeLastname,
        onChangeAge,
        onChangeCity,
        onChangeUsername,
        onChangeAvatar,
        onChangeCountry,
    } = props;
    const { t } = useTranslation();

    if (isLoading) {
        return (
            <Card padding="24" border="partial" fullWidth>
                <Flex direction="column" gap="32">
                    <Flex direction="row" justify="center" max>
                        <Skeleton
                            borderRadius="100%"
                            width={128}
                            height={128}
                        />
                    </Flex>
                    <Flex direction="row" gap="32" max>
                        <Flex direction="column" gap="16" max>
                            <Skeleton width="100%" height={38} />
                            <Skeleton width="100%" height={38} />
                            <Skeleton width="100%" height={38} />
                            <Skeleton width="100%" height={38} />
                        </Flex>
                        <Flex direction="column" gap="16" max>
                            <Skeleton width="100%" height={38} />
                            <Skeleton width="100%" height={38} />
                            <Skeleton width="100%" height={38} />
                            <Skeleton width="100%" height={38} />
                        </Flex>
                    </Flex>
                </Flex>
            </Card>
        );
    }

    if (error) {
        return (
            <Flex direction="row" justify="center" max>
                <Text
                    variant="error"
                    title={t("shared:profile.fetchProfileError")}
                    text={t("shared:actions.refreshPage")}
                    align="center"
                />
            </Flex>
        );
    }

    return (
        <Card
            className={classNames("", {}, [className])}
            padding="24"
            fullWidth
        >
            <Flex direction="column" gap="32">
                {data?.avatar && (
                    <Flex direction="row" justify="center" max>
                        <Avatar src={data.avatar || ""} size={120} />
                    </Flex>
                )}
                <Flex direction="row" gap="24" max>
                    <Flex direction="column" gap="16" max>
                        <Input
                            value={data?.firstname}
                            label={t("shared:profile.yourFirstname")}
                            readOnly={Boolean(readOnly)}
                            onChange={onChangeFirstname}
                            data-testid="ProfileCard.firstname"
                        />
                        <Input
                            value={data?.lastname}
                            label={t("shared:profile.yourLastname")}
                            readOnly={Boolean(readOnly)}
                            onChange={onChangeLastname}
                            data-testid="ProfileCard.lastname"
                        />
                        <Input
                            value={data?.age}
                            label={t("shared:profile.yourAge")}
                            readOnly={Boolean(readOnly)}
                            onChange={onChangeAge}
                        />
                    </Flex>
                    <Flex direction="column" gap="16" max>
                        <CountrySelect
                            className={cls.country}
                            value={data?.country || ""}
                            onChange={onChangeCountry}
                            readOnly={Boolean(readOnly)}
                        />
                        <Input
                            value={data?.city}
                            label={t("shared:profile.yourCity")}
                            readOnly={Boolean(readOnly)}
                            onChange={onChangeCity}
                        />
                        <Input
                            value={data?.username}
                            label={t("shared:profile.yourUsername")}
                            readOnly={Boolean(readOnly)}
                            onChange={onChangeUsername}
                        />
                        <Input
                            value={data?.avatar}
                            label={t("shared:profile.yourAvatar")}
                            readOnly={Boolean(readOnly)}
                            onChange={onChangeAvatar}
                        />
                    </Flex>
                </Flex>
            </Flex>
        </Card>
    );
};
