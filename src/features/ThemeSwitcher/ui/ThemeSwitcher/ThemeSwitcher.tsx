import { memo } from "react";
import { useTheme } from "@/shared/hooks/useTheme";
import { classNames } from "@/shared/lib/classNames/classNames";
import { Icon } from "@/shared/ui/Icon";
import ThemeIcon from "@/shared/assets/icons/theme.svg";

interface ThemeSwitcherProps {
    className?: string;
}

export const ThemeSwitcher = memo(({ className }: ThemeSwitcherProps) => {
    const { toggleTheme } = useTheme();

    return (
        <Icon
            className={classNames("", {}, [className])}
            Svg={ThemeIcon}
            onClick={toggleTheme}
        />
    );
});
