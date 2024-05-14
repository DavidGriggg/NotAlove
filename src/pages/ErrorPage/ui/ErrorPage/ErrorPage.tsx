import { useTranslation } from "react-i18next";
import cls from "./ErrorPage.module.scss";
import { classNames } from "@/shared/lib/classNames/classNames";
import { Button } from "@/shared/ui/Button";

interface PageErrorProps {
    className?: string;
}

export const ErrorPage = ({ className }: PageErrorProps) => {
    const { t } = useTranslation();

    const reloadPage = () => {
        location.reload();
    };

    return (
        <div className={classNames(cls.PageError, {}, [className])}>
            <p className={classNames(cls.text, {}, [])}>
                {t("shared:unexpectedError")}
            </p>
            <Button onClick={reloadPage}>
                {t("shared:actions.refreshPage")}
            </Button>
        </div>
    );
};
