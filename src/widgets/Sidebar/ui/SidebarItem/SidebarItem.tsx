import { memo } from "react";
import { useTranslation } from "react-i18next";
import cls from "./SidebarItem.module.scss";
import { classNames } from "@/shared/lib/classNames/classNames";
import { SidebarItemType } from "@/widgets/Sidebar/model/types/sidebar";
import { Icon } from "@/shared/ui/Icon";
import { Link } from "@/shared/ui/Link";

interface SidebarItemProps {
    item: SidebarItemType;
    collapsed: boolean;
}

export const SidebarItem = memo(({ item, collapsed }: SidebarItemProps) => {
    const { t } = useTranslation();

    return (
        <Link
            to={item.path}
            className={classNames(cls.item, { [cls.collapsed]: collapsed }, [])}
            activeClassName={cls.active}
        >
            <Icon Svg={item.Icon} />
            {!collapsed && <span className={cls.link}>{t(item.text)}</span>}
        </Link>
    );
});
