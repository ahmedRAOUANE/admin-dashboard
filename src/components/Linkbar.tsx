"use client";

import useModal from "@/hooks/useModal";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { IoHomeOutline } from "react-icons/io5";

const Linkbar = () => {
    const linkSigments = usePathname().split("/");
    const {closeModal} = useModal();

    return (
        <div className="hidden md:flex items-center justify-between gap-2 p-3 sticky top-0 mb-10 bg-white dark:bg-white-dark shadow z-10 rounded-lg w-full">
            <div className="flex items-center gap-2">
                <Link
                    href={"/"}
                    className="flex items-cener gap-2 text-xl"
                    onClick={closeModal}
                >
                    <IoHomeOutline />
                </Link>

                {linkSigments.map((segment, index) =>
                    segment === "/" ? (
                        ""
                    ) : (
                        <Link
                            href={`${linkSigments.slice(0, index + 1).join("/")}`}
                            key={index}
                            className="flex items-center gap-2 text-xl"
                            onClick={closeModal}
                        >
                            <p className={`hover:underline ${index === linkSigments.length - 1 && "underline"}`}>{segment}</p>
                            {index !== linkSigments.length - 1 && ">"}
                        </Link>
                    )
                )}
            </div>
        </div>
    );
};

export default Linkbar;
