import { useEffect, Suspense } from "react";
import { I18nextProvider } from "react-i18next";
import { LoadingPage } from "@/pages/LoadingPage";
import { Decorator } from "@storybook/react";
import i18n from "/config/storybook/i18n";

export const I18nDecorator: Decorator = (StoryFn, context) => {
    const { locale } = context.globals;

    useEffect(() => {
        i18n.changeLanguage(locale);
    }, [locale]);

    return (
        <Suspense fallback={<LoadingPage />}>
            <I18nextProvider i18n={i18n}>
                <StoryFn />
            </I18nextProvider>
        </Suspense>
    );
};
