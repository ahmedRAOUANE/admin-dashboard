"use client";

import React from 'react'
import StyledBtn from './StyledBtn';
import { handleDeleteCategoryAction } from '@/actions/categoryAction';
import useModal from '@/hooks/useModal';
import { handleDeleteQuestionAction } from '@/actions/questionActions';

const DeleteBtn = ({ targetId, target }: { targetId: string, target: string }) => {
    const { openModal } = useModal()
    const handleDelete = async (targetId: string) => {
        if (!targetId) return;

        if (target === "question") {
            const deletedQuestion = await handleDeleteQuestionAction(targetId);

            console.log("deletedQuestion: ", deletedQuestion);

            if (deletedQuestion.status === "success") {
                // show success message
            }
        } else if (target === "category") {
            const deletedCategory = await handleDeleteCategoryAction(targetId);

            console.log("deletedCategory: ", deletedCategory);

            if (deletedCategory.status === "success") {
                // show success message
                openModal("categoryDeleted");
            }
        }
    }

    return (
        <StyledBtn onClick={() => handleDelete(targetId)} className='p-1 px-4 justify-center bg-danger rounded-md'>Delete</StyledBtn>
    )
}

export default DeleteBtn