import { memo, useMemo, useState } from "react";
import cls from "./Sidebar.module.scss";
import { classNames } from "@/shared/lib/classNames/classNames";
import { SidebarItem } from "../SidebarItem/SidebarItem";
import { sidebarItemsList } from "../../model/config/sidebar";
import { ThemeSwitcher } from "@/features/ThemeSwitcher";
import { LangSwitcher } from "@/features/LangSwitcher";
import { Icon } from "@/shared/ui/Icon";
import { AppLogo } from "@/shared/ui/AppLogo";
import { Flex } from "@/shared/ui/Flex";
import ArrowIcon from "@/shared/assets/icons/arrow-bottom.svg";

interface SidebarProps {
    className?: string;
}

export const Sidebar = memo(({ className }: SidebarProps) => {
    const [collapsed, setCollapsed] = useState<boolean>(false);

    const onToggle = () => {
        setCollapsed(!collapsed);
    };

    const itemsList = useMemo(
        () =>
            sidebarItemsList.map((item) => (
                <SidebarItem
                    item={item}
                    collapsed={collapsed}
                    key={item.path}
                />
            )),
        [collapsed, sidebarItemsList]
    );

    return (
        <aside
            className={classNames(cls.Sidebar, { [cls.collapsed]: collapsed }, [
                className,
            ])}
            data-testid="sidebar"
        >
            <AppLogo className={cls.appLogo} size={collapsed ? 40 : 60} />
            <Flex
                direction="column"
                role="navigation"
                gap="8"
                className={cls.items}
            >
                {itemsList}
            </Flex>
            <Icon
                className={cls.collapseBtn}
                Svg={ArrowIcon}
                onClick={onToggle}
            />
            <div className={cls.switchers}>
                <ThemeSwitcher />
                <LangSwitcher short={collapsed} />
            </div>
        </aside>
    );
});
