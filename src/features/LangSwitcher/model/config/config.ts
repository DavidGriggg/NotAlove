import { Language } from "../types/types";
import { ListBoxItem } from "@/shared/ui/ListBox";

export const items: ListBoxItem<Language>[] = [
    {
        value: Language.RUSSIAN,
        content: "🇷🇺 " + Language.RUSSIAN,
    },
    {
        value: Language.ENGLISH,
        content: "🇬🇧 " + Language.ENGLISH,
    },
    {
        value: Language.SPANISH,
        content: "🇪🇸 " + Language.SPANISH,
    },
    {
        value: Language.FRENCH,
        content: "🇫🇷 " + Language.FRENCH,
    },
    {
        value: Language.GERMAN,
        content: "🇩🇪 " + Language.GERMAN,
    },
];
