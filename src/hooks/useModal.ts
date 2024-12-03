"use client";

import { setIsOpen, setType } from "@/store/modalSlice";
import { useDispatch } from "react-redux";

const useModal = () => {
    const dispatch = useDispatch();

    const openModal = (type: string) => {
        console.log("open modal type: ", type);

        dispatch(setIsOpen(true));
        dispatch(setType(type));
    };

    const closeModal = () => {
        dispatch(setIsOpen(false))
        dispatch(setType(""))
    }

    return { openModal, closeModal }
}

export default useModal

