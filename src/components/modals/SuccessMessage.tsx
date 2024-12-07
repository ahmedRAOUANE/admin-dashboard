"use client";

import StyledBtn from '../StyledBtn'
import useModal from '@/hooks/useModal'
import Link from 'next/link';

const SuccessMessage = ({ status, message, pageToRedirect, cancelBtn }: { status: string, message: string, pageToRedirect?: string, cancelBtn?: string }) => {
    const { closeModal } = useModal();

    return (
        <div className='flex flex-col gap-3'>
            <h1 className='text-2xl font-bold border-b border-gray pb-2'>{status}</h1>

            <p className='text-lg font-semibold'>{message}.</p>

            <div className='flex gap-3 w-full justify-end'>
                {pageToRedirect && <Link href={`/${pageToRedirect}`} onClick={closeModal} className='px-4 py-1 flex items-center justify-center bg-primary rounded-md'>Go to {pageToRedirect}</Link>}

                {cancelBtn && <StyledBtn className='p-1 px-4 justify-center bg-green rounded-md' onClick={closeModal}>{cancelBtn}</StyledBtn>}
            </div>
        </div>
    )
}

export default SuccessMessage