import { ReactNode, useMemo } from "react";
import { Listbox as IListbox } from "@headlessui/react";
import cls from "./ListBox.module.scss";
import { classNames } from "@/shared/lib/classNames/classNames";
import { Button } from "@/shared/ui/Button";
import { Flex } from "@/shared/ui/Flex";
import ArrowIcon from "@/shared/assets/icons/arrow-bottom.svg";
import { Icon } from "@/shared/ui/Icon";

export type DropdownDirection =
    | "top left"
    | "top right"
    | "bottom left"
    | "bottom right";

const mapDirectionClass: Record<DropdownDirection, string> = {
    "bottom left": cls.optionsBottomLeft,
    "bottom right": cls.optionsBottomRight,
    "top right": cls.optionsTopRight,
    "top left": cls.optionsTopLeft,
};

export interface ListBoxItem<T extends string> {
    value: string;
    content: ReactNode;
    disabled?: boolean;
}

interface ListBoxProps<T extends string> {
    items?: ListBoxItem<T>[];
    value?: T;
    defaultValue?: string;
    onChange: (value: T) => void;
    className?: string;
    disabled?: boolean;
    direction?: DropdownDirection;
    label?: string;
}

export const ListBox = <T extends string>(props: ListBoxProps<T>) => {
    const {
        className,
        items,
        value,
        defaultValue,
        onChange,
        disabled,
        direction = "bottom right",
        label,
    } = props;

    const optionsClasses: any[] = [mapDirectionClass[direction], cls.menu];

    const selectedItem = useMemo(() => {
        // @ts-ignore
        return items?.find((item) => item.value === value);
    }, [items, value]);

    return (
        <Flex direction="row" gap="4">
            {label && <span>{label}</span>}
            <IListbox
                className={classNames(cls.ListBox, {}, [className])}
                as="div"
                value={value}
                onChange={onChange}
            >
                <IListbox.Button className={cls.trigger}>
                    <Button
                        variant="filled"
                        disabled={Boolean(disabled)}
                        addonRight={<Icon Svg={ArrowIcon} />}
                    >
                        {selectedItem?.content ?? defaultValue}
                    </Button>
                </IListbox.Button>
                <IListbox.Options
                    className={classNames(cls.options, {}, optionsClasses)}
                >
                    {items?.map((item) => (
                        <IListbox.Option
                            value={item?.value as any}
                            disabled={Boolean(disabled)}
                            key={item?.value}
                            as="div"
                        >
                            {({ active, selected }) => (
                                <li
                                    className={classNames(
                                        cls.item,
                                        {
                                            [cls.active]: active,
                                            [cls.disabled]: item?.disabled,
                                            [cls.selected]: selected,
                                        },
                                        []
                                    )}
                                >
                                    {selected}
                                    {item?.content}
                                </li>
                            )}
                        </IListbox.Option>
                    ))}
                </IListbox.Options>
            </IListbox>
        </Flex>
    );
};
