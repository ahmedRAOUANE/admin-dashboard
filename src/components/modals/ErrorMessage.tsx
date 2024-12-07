import { RootState } from '@/store'
import React from 'react'
import { useSelector } from 'react-redux'
import StyledBtn from '../StyledBtn';
import useModal from '@/hooks/useModal';
import Link from 'next/link';

const ErrorMessage = () => {
    const errorData = useSelector((state: RootState) => state.error.error);

    const { closeModal } = useModal();

    return (
        <div className='flex flex-col gap-3'>
            <h1 className='text-2xl font-bold border-b border-gray pb-2'>Error</h1>

            <p className='text-lg font-semibold'>{errorData?.message}</p>

            <div className='flex gap-3 w-full justify-end'>
                {errorData?.action === "redirect" ? (
                    <Link href={`/${errorData.redirectTo}`} onClick={closeModal} className='px-4 py-1 flex items-center justify-center bg-primary rounded-md'>Go to {errorData.redirectTo}</Link>
                ) : (
                    <StyledBtn className='p-1 px-4 justify-center bg-green rounded-md' onClick={closeModal}>{errorData?.action}</StyledBtn>
                )}
            </div>
        </div>
    )
}

export default ErrorMessage