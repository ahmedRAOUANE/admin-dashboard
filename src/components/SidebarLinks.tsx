"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

const sidebarLinks = [
    // { ImgSrc: "/", name: "Home", href: "/" },
    { ImgSrc: "/dashbord.svg", name: "Dashboard", href: "/dashboard" },
    { ImgSrc: "/globe.svg", name: "Categories", href: "/categories" },
    // { ImgSrc: "/dashbord.svg", name: "Workflows", href: "/workflows" },
    { ImgSrc: "/faQ.svg", name: "questions", href: "/questions" },
    // { ImgSrc: "/Reports.svg", name: "Reports", href: "/reports" },
    { ImgSrc: "/settings.svg", name: "Settings", href: "/settings" },
];

const SidebarLinks = () => {
    const Pathname = usePathname();
    const currentPath = Pathname.split("/")[1];

    return (
        <ul className="flex md:flex-col items-center gap-2 w-full flex-1">
            {sidebarLinks.map((item, idx) => (
                <li key={idx} className={`md:w-full overflow-hidden hover:bg-gray dark:hover:bg-gray-dark px-2 md:py-1 rounded-lg ${currentPath === item.name.toLocaleLowerCase() && "bg-gray dark:bg-gray-dark"}`}>
                    <Link href={item.href} className="flex-1 flex items-center justify-start gap-3 overflow-hidden p-2 rounded-lg">
                        <Image src={item.ImgSrc} alt={item.name} width={20} height={20} />

                        <span className="flex-1 hidden md:block">{item.name}</span>
                    </Link>
                </li>
            ))}
        </ul>
    )
}

export default SidebarLinks