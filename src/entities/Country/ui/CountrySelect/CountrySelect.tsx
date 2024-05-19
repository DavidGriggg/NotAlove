import { memo } from "react";
import cls from "./ContrySelect.module.scss";
import ReactFlagSelect from "react-flags-select";
import { useTranslation } from "react-i18next";
import { Flex } from "@/shared/ui/Flex";
import { Text } from "@/shared/ui/Text";
import { classNames } from "@/shared/lib/classNames/classNames";

interface CountrySelectProps {
    className?: string;
    value: string;
    onChange: (value: string) => void;
    readOnly?: boolean;
}

export const CountrySelect = memo(
    ({ className, value = "", onChange, readOnly }: CountrySelectProps) => {
        const { t } = useTranslation();
        return (
            <Flex
                className={classNames("", {}, [className])}
                direction="row"
                gap="8"
                justify="start"
            >
                <Text text={t("shared:profile.yourCountry")} />
                <ReactFlagSelect
                    selectButtonClassName={classNames(
                        cls.select,
                        { [cls.disabled]: readOnly },
                        []
                    )}
                    selected={value}
                    onSelect={onChange}
                    disabled={Boolean(readOnly)}
                    placeholder=""
                    searchable
                    searchPlaceholder={t("shared:actions.search")}
                />
            </Flex>
        );
    }
);
