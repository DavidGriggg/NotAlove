import { Suspense } from "react";
import { classNames } from "@/shared/lib/classNames/classNames";
import { LoginFormAsync } from "../LoginForm/LoginForm.async";
import { loginActions } from "../../model/slice/loginSlice";
import { Modal } from "@/shared/ui/Modal";
import { useAppDispatch } from "@/shared/hooks/useAppDispatch/useAppDispatch";
import { Loader } from "@/shared/ui/Loader";

interface LoginModalProps {
    className?: string;
    isOpen: boolean;
    onClose: () => void;
}

export const LoginModal = ({ className, isOpen, onClose }: LoginModalProps) => {
    const dispatch = useAppDispatch();

    const onCloseModal = () => {
        dispatch(loginActions.resetData());
    };

    return (
        <Modal
            className={classNames("", {}, [className])}
            isOpen={isOpen}
            onClose={onClose}
            onOverlayClick={onCloseModal}
            lazy
        >
            <Suspense fallback={<Loader />}>
                <LoginFormAsync closeModal={onClose} />
            </Suspense>
        </Modal>
    );
};
