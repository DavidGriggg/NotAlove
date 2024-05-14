import {
    ChangeEvent,
    InputHTMLAttributes,
    memo,
    MutableRefObject,
    ReactNode,
    useEffect,
    useRef,
    useState,
} from "react";
import cls from "./Input.module.scss";
import { classNames } from "@/shared/lib/classNames/classNames";
import { Modes } from "@/shared/lib/classNames/classNames";
import { Flex } from "@/shared/ui/Flex";
import { Text } from "@/shared/ui/Text";

type HTMLInputProps = Omit<
    InputHTMLAttributes<HTMLInputElement>,
    "value" | "onChange" | "readOnly" | "size"
>;

type InputSize = "s" | "m" | "l";

interface InputProps extends HTMLInputProps {
    className?: string;
    value?: string | number | undefined;
    label?: string;
    onChange?: (value: string) => void;
    autofocus?: boolean;
    readOnly?: boolean;
    addonLeft?: ReactNode;
    addonRight?: ReactNode;
    size?: InputSize;
}

export const Input = memo((props: InputProps) => {
    const {
        className,
        value,
        label,
        onChange,
        type = "text",
        placeholder,
        autofocus,
        readOnly,
        addonLeft,
        addonRight,
        size = "m",
        ...otherProps
    } = props;

    const [isFocused, setIsFocused] = useState<boolean>(false);
    const ref = useRef() as MutableRefObject<HTMLInputElement>;

    useEffect(() => {
        if (autofocus) {
            setIsFocused(true);
            ref.current?.focus();
        }
    }, [autofocus]);

    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        onChange?.(e.target.value);
    };

    const onBlur = () => {
        setIsFocused(false);
    };

    const onFocus = () => {
        setIsFocused(true);
    };

    const modes: Modes = {
        [cls.readOnly]: readOnly,
        [cls.focused]: isFocused,
        [cls.withAddonLeft]: Boolean(addonLeft),
        [cls.withAddonRight]: Boolean(addonRight),
    };

    const input = (
        <div
            className={classNames(cls.InputWrapper, modes, [
                className,
                cls[size],
            ])}
        >
            <div className={cls.addonLeft}>{addonLeft}</div>
            <input
                className={cls.input}
                ref={ref}
                type={type}
                value={value}
                onChange={onChangeHandler}
                onFocus={onFocus}
                onBlur={onBlur}
                readOnly={readOnly}
                placeholder={placeholder}
                {...otherProps}
            />
            <div className={cls.addonRight}>{addonRight}</div>
        </div>
    );

    if (label) {
        return (
            <Flex direction="row" gap="8" max>
                <Text text={label} />
                {input}
            </Flex>
        );
    }

    return input;
});
