import { memo } from "react";
import { classNames } from "@/shared/lib/classNames/classNames";
import cls from "./AppLogo.module.scss";
import AppLogoIcon from "@/shared/assets/icons/logo.svg";
import { Flex } from "@/shared/ui/Flex";

interface AppLogoProps {
    className?: string;
    size?: number;
}

export const AppLogo = memo(({ className, size = 50 }: AppLogoProps) => {
    return (
        <Flex className={classNames("", {}, [className])} direction="row" max>
            <AppLogoIcon className={cls.appLogo} width={size} height={size} />
            <div className={cls.gradientBig} />
            <div className={cls.gradientSmall} />
        </Flex>
    );
});
