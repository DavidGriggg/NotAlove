import { memo } from "react";
import { useTranslation } from "react-i18next";
import { Page } from "../../../../shared/ui/Page";

const AboutPage = memo(() => {
    const { t } = useTranslation();

    return <Page>{t("shared:pages.aboutUs")}</Page>;
});

export default AboutPage;
