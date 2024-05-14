import { useTranslation } from "react-i18next";
import cls from "./NotFoundPage.module.scss";
import { classNames } from "@/shared/lib/classNames/classNames";
import { Page } from "@/shared/ui/Page";

interface NotFoundPageProps {
    className?: string;
}

export const NotFoundPage = ({ className }: NotFoundPageProps) => {
    const { t } = useTranslation();

    return (
        <Page className={classNames(cls.NotFoundPage, {}, [className])}>
            {t("shared:pages.notFound")}
        </Page>
    );
};
