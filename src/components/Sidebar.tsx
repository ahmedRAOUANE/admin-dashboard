import Image from "next/image";
import Link from "next/link";
import SidebarLinks from "./SidebarLinks";
import Footer from "./Footer";
import LogoutBtn from "./LogoutBtn";

const Sidebar = () => {
    return (
        <aside className="col-span-12 md:col-span-2 row-span-1 md:row-span-11 flex-[0.13] transition-all flex md:flex-col items-center justify-between gap-5 bg-white dark:bg-white-dark p-2 shadow">
            {/* sinse it's the logo it will navigate to the home page */}
            <Link href="/" className="logo bg-white rounded-full">
                <Image src={"/algeriePostLogo.svg"} alt="logo" width={20} height={20} className="w-7 md:w-[100px] h-7 md:h-[100px] bg-white dark:bg-white-dark" />
            </Link>

            <SidebarLinks />

            <div className="flex flex-col items-center gap-2 md:w-full">
                {/* <StyledBtn className="bg-gray dark:bg-gray-dark shadow rounded-full px-4 md:py-2 w-full justify-center">
                    Hide
                </StyledBtn> */}

                {/* // !this link for logout feature if exists */}
                <LogoutBtn /> 

                <Footer className="hidden md:block" />
            </div>
        </aside>
    );
};

export default Sidebar;