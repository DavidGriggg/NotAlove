import { memo } from "react";
import { useTranslation } from "react-i18next";
import { Page } from "@/shared/ui/Page";

const MainPage = memo(() => {
    const { t } = useTranslation();

    return <Page>{t("shared:pages.main")}</Page>;
});

export default MainPage;
