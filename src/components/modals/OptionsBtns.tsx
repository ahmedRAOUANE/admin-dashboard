"use client";

import { usePathname, useRouter } from "next/navigation";
import StyledBtn from "../StyledBtn";
import { deleteFaq } from "@/actions/faqs";
import { deleteWorkflow } from "@/actions/workflows";
import useModal from "@/hooks/useModal";
import Link from "next/link";

const OptionsBtns = () => {
    const pathname = usePathname();
    const currentPage = pathname.split("/")[1];
    const currentItemId = pathname.split("/")[2];

    const router = useRouter();

    const { closeModal } = useModal();

    const handleDelete = async () => {
        if (currentPage === "workflows") {
            await deleteWorkflow(currentItemId);
            router.push("/workflows");
        } else if (currentPage === "faqs") {
            await deleteFaq(currentItemId);
            router.push("/faqs");
        } else {
            return console.log("Invalid page");
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