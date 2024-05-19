import { memo, useCallback } from "react";
import { useTranslation } from "react-i18next";
import { ListBox } from "@/shared/ui/ListBox";
import { Language } from "@/features/LangSwitcher/model/types/types";
import { items } from "../../model/config/config";
import { getFormattedItems } from "../../model/lib/getFormattedItems";
import { getFlags } from "../../model/lib/getFlags";

interface LangSwitcherProps {
    short: boolean;
}

export const LangSwitcher = memo(({ short }: LangSwitcherProps) => {
    const { i18n } = useTranslation();

    const formattedItems = getFormattedItems(items);

    const flags = getFlags(items);
    const currentFlag = flags.find(
        (item) => item.value === i18n.language
    )?.content;
    console.log(flags);

    const defaultValue = formattedItems.find(
        (item) => item.value === Language.RUSSIAN
    )?.content;
    const defaultValueFlag = flags.find(
        (flag) => flag.value === Language.RUSSIAN
    )?.content;

    const onChange = useCallback((lng: string) => {
        i18n.changeLanguage(lng);
    }, []);

    return short ? (
        <>{currentFlag ?? defaultValueFlag}</>
    ) : (
        <ListBox<string>
            onChange={onChange}
            items={formattedItems}
            value={i18n.language}
            defaultValue={defaultValue as string}
            direction="top left"
        />
    );
});
