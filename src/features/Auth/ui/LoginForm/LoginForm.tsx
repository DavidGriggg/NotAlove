import { memo, useCallback } from "react";
import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";
import { classNames } from "@/shared/lib/classNames/classNames";
import cls from "./LoginForm.module.scss";
import { loginActions } from "../../model/slice/loginSlice";
import { getLoginState } from "../../model/selectors/getLoginState";
import { login } from "../../model/services/login";
import { Input } from "@/shared/ui/Input";
import { Text } from "@/shared/ui/Text";
import { Button } from "@/shared/ui/Button";
import { useAppDispatch } from "@/shared/hooks/useAppDispatch/useAppDispatch";

export interface LoginFormProps {
    className?: string;
    closeModal: () => void;
}

const LoginForm = memo(({ className, closeModal }: LoginFormProps) => {
    const { t } = useTranslation();
    const dispatch = useAppDispatch();
    const { username, password, isLoading, error } = useSelector(getLoginState);

    const onChangeUsername = useCallback(
        (value: string) => {
            dispatch(loginActions.setUsername(value));
        },
        [dispatch]
    );

    const onChangePassword = useCallback(
        (value: string) => {
            dispatch(loginActions.setPassword(value));
        },
        [dispatch]
    );

    const onLoginClick = useCallback(async () => {
        // @ts-ignore
        const result = await dispatch(login({ username, password }));
        if (result.meta.requestStatus === "fulfilled") {
            dispatch(loginActions.resetData());
            closeModal();
        }
    }, [dispatch, username, password]);

    return (
        <div className={classNames(cls.LoginForm, {}, [className])}>
            <Text title={t("shared:auth.authForm")} />
            {error && <Text text={t(error)} variant="error" />}
            <Input
                className={cls.input}
                placeholder={t("shared:auth.enterUsername")}
                value={username}
                onChange={onChangeUsername}
                autofocus
            />
            <Input
                className={cls.input}
                placeholder={t("shared:auth.enterPassword")}
                value={password}
                onChange={onChangePassword}
            />
            <Button
                className={cls.loginBtn}
                onClick={onLoginClick}
                disabled={isLoading}
            >
                {t("shared:auth.signIn")}
            </Button>
        </div>
    );
});

export default LoginForm;
