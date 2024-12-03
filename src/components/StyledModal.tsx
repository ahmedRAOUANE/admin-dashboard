"use client";

/**
 * This is a modal component
 *
 * !you can not add class are already exists in default
 *
 * className: bg-white p-4 rounded shadow-lg min-w-96 py-5
 */

import useModal from "@/hooks/useModal";
import OptionsBtns from "./modals/OptionsBtns";
import { useSelector } from "react-redux";
import { RootState } from "@/store";

const renderModal = ({ modalType }: { modalType: string }) => {
    switch (modalType) {
        case "FAQoptions":
            return <OptionsBtns />
        default:
            return null
    }
}

const StyledModal = () => {
    const isOpen = useSelector((state: RootState) => state.modal.isOpen);
    const modalType = useSelector((state: RootState) => state.modal.type);

    const { closeModal } = useModal();

    return isOpen && (
        <div
            onClick={closeModal}
            className={`absolute top-0 left-0 z-100 w-screen h-screen bg-white/50 dark:bg-white-dark/50 flex items-center justify-center backdrop-blur`}
        >
            <div
                onClick={(e) => e.stopPropagation()}
                className={`bg-white dark:bg-white-dark p-4 rounded shadow-lg min-w-96 py-5`}
            >
                {renderModal({ modalType })}
            </div>
        </div>
    )
};

export default StyledModal;
