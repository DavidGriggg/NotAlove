import { classNames, Modes } from "@/shared/lib/classNames/classNames";
import { ButtonHTMLAttributes, FC, memo, ReactNode } from "react";
import cls from "./Button.module.scss";

export type ButtonVariant = "clear" | "outline" | "filled";
export type ButtonColor = "normal" | "success" | "error";

export type ButtonSize = "m" | "l" | "xl";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    className?: string;
    variant?: ButtonVariant;
    size?: ButtonSize;
    color?: ButtonColor;
    disabled?: boolean;
    fullWidth?: boolean;
    addonLeft?: ReactNode;
    addonRight?: ReactNode;
}

export const Button: FC<ButtonProps> = memo((props: ButtonProps) => {
    const {
        children,
        className,
        variant = "outline",
        color = "normal",
        disabled,
        size = "m",
        fullWidth,
        addonLeft,
        addonRight,
        ...otherProps
    } = props;

    const modes: Modes = {
        [cls.disabled]: disabled,
        [cls.fullwidth]: fullWidth,
        [cls.widthAddon]: Boolean(addonRight) || Boolean(addonLeft),
    };

    return (
        <button
            type="button"
            className={classNames(cls.Button, modes, [
                className,
                cls[variant],
                cls[size],
                cls[color],
            ])}
            disabled={disabled}
            {...otherProps}
        >
            <div className={cls.addonLeft}>{addonLeft}</div>
            {children}
            <div className={cls.addonRight}>{addonRight}</div>
        </button>
    );
});
