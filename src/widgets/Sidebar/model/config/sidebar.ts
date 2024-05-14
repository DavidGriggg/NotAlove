import { SidebarItemType } from "@/widgets/Sidebar/model/types/sidebar";
import { RoutePath } from "@/shared/config/router/routeConfig";
import MainIcon from "@/shared/assets/icons/home.svg";
import AboutIcon from "@/shared/assets/icons/Info.svg";

export const sidebarItemsList: SidebarItemType[] = [
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
];
