"use client";

import StyledBtn from './StyledBtn'
import { handleLogoutAction } from '@/actions/authAction'
import { redirect } from 'next/navigation';

const LogoutBtn = () => {
    const handleLogout = async () => {
        const res = await handleLogoutAction();

        if (res.status === "success") {
            redirect("/login");
        }
    }

    return (
        <StyledBtn onClick={handleLogout} className="bg-gray shadow rounded-full px-3 md:py-2 w-full justify-center text-sm">
            Logout
        </StyledBtn>
    )
}

export default LogoutBtn