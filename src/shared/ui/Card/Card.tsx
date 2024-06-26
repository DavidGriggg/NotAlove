import { HTMLAttributes, ReactNode } from "react";
import cls from "./Card.module.scss";
import { classNames, Modes } from "@/shared/lib/classNames/classNames";

export type CardVariant = "normal" | "outlined" | "light";
export type CardPadding = "0" | "8" | "16" | "24";
export type CardBorder = "round" | "normal" | "partial";

interface CardProps extends HTMLAttributes<HTMLDivElement> {
    className?: string;
    children: ReactNode;
    variant?: CardVariant;
    fullWidth?: boolean;
    fullHeight?: boolean;
    padding?: CardPadding;
    border?: CardBorder;
}

const mapPaddingToClass: Record<CardPadding, string> = {
    "0": "gap_0",
    "8": "gap_8",
    "16": "gap_16",
    "24": "gap_24",
};

export const Card = (props: CardProps) => {
    const {
        className,
        children,
        variant = "normal",
        fullWidth,
        fullHeight,
        padding = "8",
        border = "normal",
        ...otherProps
    } = props;

    const paddingClass = mapPaddingToClass[padding];

    const modes: Modes = {
        [cls.fullWidth]: fullWidth,
        [cls.fullHeight]: fullHeight,
    };

    return (
        <div
            className={classNames(cls.Card, modes, [
                className,
                cls[variant],
                cls[paddingClass],
                cls[border],
            ])}
            {...otherProps}
        >
            {children}
        </div>
    );
};
