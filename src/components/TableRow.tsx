"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { CiEdit } from "react-icons/ci";
import { CiTrash } from "react-icons/ci";
import { BsThreeDotsVertical } from "react-icons/bs";
import StyledBtn from "@/components/StyledBtn";
import { FaqType, SellsStyleType, TableOptionsType, WorkflowType } from "@/utils/types";

// Map for dynamic status colors uncomment when needed
// const statusColors = {
//     Paid: "bg-green",
//     Unpaid: "bg-red",
//     Open: "bg-yellow",
//     Inactive: "bg-zinc-500",
//     Due: "bg-red-600",
// };

const TableRow = ({ item, style, options }: { item: WorkflowType | FaqType, style?: SellsStyleType, options?: TableOptionsType }) => { // any type is temporary
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isChecboxSelected, setIsChecboxSelected] = useState(false);

    const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

    // Close menu when clicking outside
    useEffect(() => {
        const handleClickOutside = (e: MouseEvent) => {
            if (isMenuOpen && !(e.target as Element).closest(".menu-container")) {
                setIsMenuOpen(false);
            }
        };

        document.addEventListener("click", handleClickOutside);
        return () => document.removeEventListener("click", handleClickOutside);
    }, [isMenuOpen]);

    return (
        <Link href={`/workflows/${item._id}`} className="flex items-start justify-between border border-zinc-200 p-3">
            {options?.checkbox && (
                <div className="flex-[0.03]">
                    <input
                        type="checkbox"
                        name="selectCurrent"
                        id="selectCurrent"
                        checked={isChecboxSelected}
                        onChange={() => setIsChecboxSelected(!isChecboxSelected)}
                    />
                </div>
            )}

            {Object.keys(item).map((key) => (
                <span
                    key={key}
                    className={style && style[key as keyof typeof style]}
                >
                    {
                        typeof item[key as keyof typeof item] === "object"
                            ? null 
                            : item[key as keyof typeof item]
                    }
                </span>
            ))}

            {options?.optionsBtn && (
                <StyledBtn
                    onClick={toggleMenu}
                    className={`rounded-full flex-[0.05] aspect-square justify-center hover:shadow-lg relative`}
                >
                    <BsThreeDotsVertical />
                    <div
                        className={`menu-container bg-white z-10 rounded border border-gray shadow p-2 ${isMenuOpen ? "absolute top-14 right-7" : "hidden"}`}
                    >
                        <div className="flex flex-row-reverse gap-x-2">
                            <Link
                                href={`/workflows/edit/${item._id}`}
                                className="text-3xl hover:text-green hover:animate-pulse"
                            >
                                <CiEdit />
                            </Link>
                            <CiTrash className="text-3xl hover:text-red-500 hover:animate-pulse" />
                        </div>
                    </div>
                </StyledBtn>
            )}
        </Link>
    );
};

export default TableRow;

