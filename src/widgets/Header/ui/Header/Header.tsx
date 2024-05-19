import { memo, useCallback, useState } from "react";
import { useSelector } from "react-redux";
import { useTranslation } from "react-i18next";
import cls from "./Header.module.scss";
import { classNames } from "@/shared/lib/classNames/classNames";
import { LoginModal } from "@/features/Auth";
import { Button } from "@/shared/ui/Button";
import { getUserAuthData, userActions } from "@/entities/User";
import { useAppDispatch } from "@/shared/hooks/useAppDispatch/useAppDispatch";

interface HeaderProps {
    className?: string;
}

export const Header = memo(({ className }: HeaderProps) => {
    const { t } = useTranslation();
    const dispatch = useAppDispatch();
    const [isAuthOpen, setIsAuthOpen] = useState(false);
    const authData = useSelector(getUserAuthData);

    const onOpen = useCallback(() => {
        setIsAuthOpen(true);
    }, []);

    const onClose = useCallback(() => {
        setIsAuthOpen(false);
    }, []);

    const onLogout = useCallback(() => {
        dispatch(userActions.logOut());
    }, [dispatch]);

    if (authData) {
        return (
            <header className={classNames(cls.Header, {}, [className])}>
                <Button className={cls.auth} variant="clear" onClick={onLogout}>
                    {t("shared:auth.logOut")}
                </Button>
            </header>
        );
    }

    return (
        <header className={classNames(cls.Header, {}, [className])}>
            <Button className={cls.auth} variant="clear" onClick={onOpen}>
                {t("shared:auth.signIn")}
            </Button>
            <LoginModal isOpen={isAuthOpen} onClose={onClose} />
        </header>
    );
});
