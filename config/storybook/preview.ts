import type { Preview } from "@storybook/react";
import { ThemeDecorator } from "@/shared/config/storybook/ThemeDecorator/ThemeDecorator";
import { StyleDecorator } from "@/shared/config/storybook/StyleDecorator/StyleDecorator";
import { RouteDecorator } from "@/shared/config/storybook/RouteDecorator/RouteDecorator";
import { I18nDecorator } from "@/shared/config/storybook/I18nDecorator/I18nDecorator";
import { Theme } from "@/shared/const/theme";
import "@/shared/config/i18n/i18n";

const preview: Preview = {
    parameters: {
        controls: {
            matchers: {
                color: /(background|color)$/i,
                date: /Date$/i,
            },
        },
    },
};

export const globalTypes = {
    theme: {
        name: "Theme",
        description: "Global theme for components",
        defaultValue: "light",
        toolbar: {
            icon: "paintbrush",
            items: [
                { value: Theme.LIGHT, icon: "circlehollow", title: "Light" },
                { value: Theme.DARK, icon: "circle", title: "Dark" },
            ],
            showName: true,
        },
    },
    locale: {
        name: "Locale",
        description: "Internationalization locale",
        toolbar: {
            icon: "globe",
            items: [
                { value: "ru", title: "Russian", right: "🇷🇺" },
                { value: "en", title: "English", right: "🇬🇧" },
                { value: "es", title: "Spanish", right: "🇪🇸" },
                { value: "fr", title: "French", right: "🇫🇷" },
                { value: "de", title: "German", right: "🇩🇪" },
            ],
            showName: true,
        },
    },
};

export default {
    decorators: [StyleDecorator, ThemeDecorator, RouteDecorator, I18nDecorator],
};
