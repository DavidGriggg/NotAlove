import type { StorybookConfig } from "@storybook/react-webpack5";
import path from "path";
import { BuildPaths } from "../build/types/config";
import webpack, { RuleSetRule } from "webpack";
import { buildCssLoader } from "../build/loaders/buildCssLoader";
import { buildSvgLoader } from "../build/loaders/buildSvgLoader";

const config: StorybookConfig = {
    stories: ["../../src/**/*.stories.@(js|jsx|mjs|ts|tsx)"],
    addons: [
        "@storybook/addon-webpack5-compiler-swc",
        "@storybook/addon-onboarding",
        "@storybook/addon-links",
        {
            name: "@storybook/addon-essentials",
            options: {
                backgrounds: false,
            },
        },
        "@chromatic-com/storybook",
        "@storybook/addon-interactions",
    ],
    framework: {
        name: "@storybook/react-webpack5",
        options: {},
    },
    swc: () => ({
        jsc: {
            transform: {
                react: {
                    runtime: "automatic",
                },
            },
        },
    }),
    docs: {
        autodocs: "tag",
    },
    webpackFinal: async (config) => {
        const paths: BuildPaths = {
            build: "",
            html: "",
            entry: "",
            src: path.resolve(__dirname, "..", "..", "src"),
        };
        config.resolve.modules.push(paths.src);
        config.resolve.extensions.push(".ts", ".tsx");
        // @ts-ignore
        config.resolve.alias = {
            ...config.resolve.alias,
            "@": paths.src,
        };

        config.module.rules = config.module.rules.map((rule: RuleSetRule) => {
            if (/svg/.test(rule.test as string)) {
                return { ...rule, exclude: /\.svg$/i };
            }

            return rule;
        });

        config.module.rules.push(buildCssLoader(true));
        config.module.rules.push(buildSvgLoader());

        config.plugins.push(
            new webpack.DefinePlugin({
                __IS_DEV__: JSON.stringify(true),
                __API__: JSON.stringify("http://testapi.ru"),
                __PROJECT__: JSON.stringify("storybook"),
            })
        );

        return config;
    },
};
export default config;
