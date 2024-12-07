"use client";

import { usePathname, useRouter } from "next/navigation";
import useModal from "@/hooks/useModal";

// server actions
import { handleDeleteCategoryAction } from "@/actions/categoryAction";
import { handleDeleteQuestionAction } from "@/actions/questionActions";

// components
import StyledBtn from "../StyledBtn";
import Link from "next/link";

const OptionsBtns = () => {
    const pathname = usePathname();
    const currentPage = pathname.split("/")[1];
    const currentItemId = pathname.split("/")[2];

    const router = useRouter();

    const { closeModal } = useModal();

    const handleDelete = async () => {
        if (currentPage === "categories") {
            await handleDeleteCategoryAction(currentItemId);
            router.push("/categories")
        } else if (currentPage === "questions") {
            await handleDeleteQuestionAction(currentItemId);
            router.push("/questions");
        } else {
            console.log("Invalid page");
            throw new Error("Invalid page - OptionsBtns");
        }

        closeModal();
    }

    return (
        <div>
            <ul className="flex flex-col gap-2">
                <Link href={`/${currentPage}/${currentItemId}/edit`} onClick={closeModal} className="bg-green dark:bg-green-dark w-full p-3 rounded-lg text-center">edit</Link>
                <StyledBtn onClick={handleDelete} className="bg-danger dark:bg-danger-dark w-full p-3 rounded-lg text-center">delete</StyledBtn>
            </ul>
        </div>
    )
}

export default OptionsBtns