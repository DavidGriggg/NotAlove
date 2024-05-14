import path from "path";

export default {
    globals: { __IS_DEV__: true, __API__: "", __PROJECT__: "jest" },
    testEnvironment: "jsdom",
    clearMocks: true,
    coveragePathIgnorePatterns: ["/node_modules/"],
    transformIgnorePatterns: ["/node_modules/(?!(axios)/)"],
    moduleDirectories: ["node_modules", "<rootDir>"],
    moduleFileExtensions: ["js", "jsx", "ts", "tsx", "json", "node"],
    modulePaths: ["<rootDir>src"],
    rootDir: "../../",
    setupFilesAfterEnv: ["<rootDir>config/jest/setupTests.ts"],
    testMatch: [`<rootDir>src/**/*(*.)@(spec|test).[tj]s?(x)`],
    moduleNameMapper: {
        "\\.s?css$": "identity-obj-proxy",
        "\\.svg": path.resolve(__dirname, "jestEmptyComponent.tsx"),
        "^axios$": require.resolve("axios"),
        "^@/(.*)$": "<rootDir>/src/$1",
    },
};
