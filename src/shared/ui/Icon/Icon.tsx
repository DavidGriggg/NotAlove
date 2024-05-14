import { memo, SVGProps, FC } from "react";
import { classNames } from "@/shared/lib/classNames/classNames";
import cls from "./Icon.module.scss";

type SvgProps = Omit<SVGProps<SVGSVGElement>, "onClick">;

interface IconProps extends SvgProps {
    className?: string;
    Svg: FC<SVGProps<SVGSVGElement>>;
    onClick?: () => void;
}

export const Icon = memo((props: IconProps) => {
    const { className, Svg, width = 32, height = 32, ...otherProps } = props;

    return (
        <button
            className={cls.button}
            type="button"
            onClick={props?.onClick}
            style={{ height, width }}
        >
            <Svg
                className={classNames(cls.Icon, {}, [className])}
                width={width}
                height={height}
                {...otherProps}
            />
        </button>
    );
});
