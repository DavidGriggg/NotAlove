import { classNames } from "@/shared/lib/classNames/classNames";
import cls from "./Link.module.scss";
import { LinkProps as RouterLinkProps, NavLink } from "react-router-dom";
import { FC, HTMLAttributeAnchorTarget, memo } from "react";

export type LinkVariant = "primary" | "red";

interface LinkProps extends RouterLinkProps {
    className?: string;
    variant?: LinkVariant;
    target?: HTMLAttributeAnchorTarget | undefined;
    activeClassName?: string;
}

export const Link: FC<LinkProps> = memo((props) => {
    const {
        to,
        className,
        children,
        variant = "primary",
        target,
        activeClassName = "",
    } = props;
    return (
        <NavLink
            className={({ isActive }) =>
                classNames("", { [activeClassName]: isActive }, [
                    className,
                    cls[variant],
                ])
            }
            to={to}
            target={target}
        >
            {children}
        </NavLink>
    );
});
