"use client";

import { BsThreeDotsVertical } from 'react-icons/bs'
import StyledBtn from '../StyledBtn'
import useModal from '@/hooks/useModal';

const OpenModalBtn = ({ className }: { className?: string }) => {
    const { openModal } = useModal();

    const handleOpenModal = () => {
        console.log("opening modal..");
        openModal('FAQoptions')
    };

    return (
        <>
            <StyledBtn className={className} onClick={handleOpenModal}>
                <BsThreeDotsVertical />
            </StyledBtn>
        </>
    )
}

export default OpenModalBtn