import { ListBoxItem } from "@/shared/ui/ListBox";
import { Language } from "@/features/LangSwitcher/model/types/types";

export const getFlags = (items: ListBoxItem<Language>[]) => {
    return items.map((item) => ({
        ...item,
        content:
            typeof item.content === "string"
                ? item.content.slice(0, 4)
                : item.content,
    }));
};
