import { memo, ReactNode } from "react";
import cls from "./Page.module.scss";
import { classNames } from "../../lib/classNames/classNames";

interface PageProps {
    className?: string;
    children: ReactNode;
}

export const Page = memo((props: PageProps) => {
    const { className, children } = props;

    return (
        <main className={classNames(cls.Page, {}, [className])}>
            {children}
        </main>
    );
});
