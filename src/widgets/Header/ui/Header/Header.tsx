import { memo } from "react";
import { useTranslation } from "react-i18next";
import cls from "./Header.module.scss";
import { classNames } from "@/shared/lib/classNames/classNames";
import { Button } from "@/shared/ui/Button";

interface HeaderProps {
    className?: string;
}

export const Header = memo(({ className }: HeaderProps) => {
    const { t } = useTranslation();

    return (
        <header className={classNames(cls.Header, {}, [className])}>
            <Button className={cls.auth} variant="clear">
                {t("shared:signIn")}
            </Button>
        </header>
    );
});
