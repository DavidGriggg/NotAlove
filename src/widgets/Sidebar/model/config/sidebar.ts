import { SidebarItemType } from "@/widgets/Sidebar/model/types/sidebar";
import { RoutePath, AppRoutes } from "@/shared/config/router/routeConfig";
import MainIcon from "@/shared/assets/icons/home.svg";
import AboutIcon from "@/shared/assets/icons/info.svg";
import ProfileIcon from "@/shared/assets/icons/avatar.svg";

export const getSidebarItemsList = (userId: string): SidebarItemType[] => {
    return [
        {
            path: RoutePath.main,
            Icon: MainIcon,
            text: "pages.main",
        },
        {
            path: RoutePath.about,
            Icon: AboutIcon,
            text: "pages.aboutUs",
        },
        {
            path: `/${AppRoutes.PROFILE}/${userId}`,
            Icon: ProfileIcon,
            text: "pages.profile",
        },
    ];
};
