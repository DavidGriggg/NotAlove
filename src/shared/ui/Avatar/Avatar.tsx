import { CSSProperties, memo, useMemo } from "react";
import { classNames } from "@/shared/lib/classNames/classNames";
import cls from "./Avatar.module.scss";
import { Image } from "@/shared/ui/Image";
import { Icon } from "@/shared/ui/Icon";
import { Skeleton } from "@/shared/ui/Skeleton";
import UserIcon from "@/shared/assets/icons/avatar.svg";

interface AvatarProps {
    className?: string;
    src?: string;
    size?: number;
    alt?: string;
}

export const Avatar = memo((props: AvatarProps) => {
    const { className, src, size, alt } = props;
    const styles = useMemo<CSSProperties>(
        () => ({
            width: size,
            height: size,
        }),
        [size]
    );

    const fallback = (
        <Skeleton
            width={size || "auto"}
            height={size || "auto"}
            borderRadius="50%"
        />
    );
    const errorFallback = <Icon Svg={UserIcon} width={size} height={size} />;

    return (
        <Image
            className={classNames(cls.Avatar, {}, [className])}
            style={styles}
            src={src || ""}
            alt={alt}
            fallback={fallback}
            errorFallback={errorFallback}
        />
    );
});
