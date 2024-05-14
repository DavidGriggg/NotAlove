import { classNames } from "@/shared/lib/classNames/classNames";
import cls from "./Tabs.module.scss";
import { memo, ReactNode, useCallback } from "react";
import { Card } from "../Card/Card";
import { Flex, FlexDirection } from "@/shared/ui/Flex";

export interface TabItem {
    value: string;
    content: ReactNode;
}

interface TabsProps {
    className?: string;
    tabs: TabItem[];
    value: string;
    onTabClick: (tab: TabItem) => void;
    direction?: FlexDirection;
}

export const Tabs = memo((props: TabsProps) => {
    const { className, tabs, value, onTabClick, direction = "row" } = props;

    const handleClick = useCallback((tab: TabItem) => {
        return () => {
            onTabClick(tab);
        };
    }, []);

    return (
        <Flex
            className={classNames(cls.Tabs, {}, [className])}
            direction={direction}
            gap="8"
            align="start"
        >
            {tabs.map((tab) => {
                const isSelected = tab.value === value;
                return (
                    <Card
                        className={classNames(
                            "",
                            { [cls.selected]: isSelected },
                            []
                        )}
                        variant={isSelected ? "light" : "normal"}
                        border="round"
                        onClick={handleClick(tab)}
                        key={tab.value}
                    >
                        {tab.content}
                    </Card>
                );
            })}
        </Flex>
    );
});
