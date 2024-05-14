import { t } from "i18next";
import { ListBoxItem } from "@/shared/ui/ListBox";
import { Language } from "@/features/LangSwitcher/model/types/types";

export const getFormattedItems = (items: ListBoxItem<Language>[]) => {
    return items.map((item) => ({
        ...item,
        content:
            typeof item.content === "string"
                ? item.content.slice(0, 4) +
                  " " +
                  t(`shared:languages.${item.content.slice(5)}`)
                : item.content,
    }));
};
