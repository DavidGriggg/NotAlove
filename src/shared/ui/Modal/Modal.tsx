import { ReactNode } from "react";
import { classNames, Modes } from "@/shared/lib/classNames/classNames";
import cls from "./Modal.module.scss";
import { Portal } from "@/shared/ui/Portal";
import { Overlay } from "@/shared/ui/Overlay";
import { useModal } from "@/shared/hooks/useModal/useModal";
import { useTheme } from "@/shared/hooks/useTheme/useTheme";

interface ModalProps {
    className?: string;
    children?: ReactNode;
    isOpen?: boolean;
    onClose?: () => void;
    lazy?: boolean;
    onOverlayClick?: () => void;
}

export const Modal = (props: ModalProps) => {
    const { className, children, isOpen, onClose, lazy, onOverlayClick } =
        props;
    const { close, isClosing, isMounted } = useModal({
        animationDelay: 300,
        onClose,
        isOpen,
    });
    const { theme } = useTheme();

    const onClick = () => {
        close();
        onOverlayClick?.();
    };

    const modes: Modes = {
        [cls.opened]: isOpen,
        [cls.isClosing]: isClosing,
    };

    if (lazy && !isMounted) {
        return null;
    }

    return (
        <Portal element={document.getElementById("app") ?? document.body}>
            <div className={classNames(cls.Modal, modes, [className, theme])}>
                <Overlay onClick={onClick} />
                <div className={cls.content}>{children}</div>
            </div>
        </Portal>
    );
};
