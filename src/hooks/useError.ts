import { setError } from "@/store/errorSlice"
import { useDispatch } from "react-redux"
import useModal from "./useModal";

const useError = () => {
    const dispatch = useDispatch();

    const { openModal } = useModal();

    const newError = ({ message, action }: { message: string, action: "ok" | "cancel" | "redirect" | "retry" }) => {
        dispatch(setError({ message, action }))
        openModal("error");
    }

    return { newError }
}

export default useError