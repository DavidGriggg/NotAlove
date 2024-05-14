import { Decorator } from "@storybook/react";
import { ThemeProvider } from "@/app/providers/ThemeProvider";
import { Theme } from "@/shared/const/theme";

export const ThemeDecorator: Decorator = (StoryFn, context) => {
    const theme = context.parameters.theme || context.globals.theme;
    const storyTheme = theme === Theme.DARK ? Theme.DARK : Theme.LIGHT;
    return (
        <ThemeProvider>
            <div className={`app ${storyTheme}`}>
                <StoryFn />
            </div>
        </ThemeProvider>
    );
};
