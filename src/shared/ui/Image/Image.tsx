import {
    ImgHTMLAttributes,
    memo,
    ReactElement,
    useLayoutEffect,
    useState,
} from "react";

interface ImageProps extends ImgHTMLAttributes<HTMLImageElement> {
    className?: string;
    src: string;
    fallback?: ReactElement;
    errorFallback?: ReactElement;
}

export const AppImage = memo(
    ({
        className,
        src,
        alt = "image",
        fallback,
        errorFallback,
        ...otherProps
    }: ImageProps) => {
        const [isLoading, setIsLoading] = useState(true);
        const [hasError, setHasError] = useState(false);

        useLayoutEffect(() => {
            const img = new Image();
            img.src = src ?? "";
            img.onload = () => {
                setIsLoading(false);
            };
            img.onerror = () => {
                setIsLoading(false);
                setHasError(true);
            };
        }, [src]);

        if (isLoading && fallback) {
            return fallback;
        }

        if (hasError && errorFallback) {
            return errorFallback;
        }

        return (
            <img className={className} src={src} alt={alt} {...otherProps} />
        );
    }
);
