// "use client";

// import { handleCreateCategoryAction } from '@/actions/categoryAction'
// import useModal from '@/hooks/useModal';
import StyledForm from '@/components/StyledForm'
import React from 'react'

const CreateCategoryPage = () => {
    // const {openModal} = useModal()
    // const handleCreateCategory = async (e: React.FormEvent<HTMLFormElement>) => {
    //     e.preventDefault();
        
    //     // "use server";
    //     const formData = new FormData(e.currentTarget);
    //     const response = await handleCreateCategoryAction(formData);

    //     console.log("response: ", response);

    //     if (response.status === "success") {
    //         openModal("categoryCreated");
    //     } else {
    //         openModal("error");
    //     }
    // }

    return (
        <main className='flex flex-col gap-10 md:px-20'>
            <h1 className='text-3xl font-bold'>Create Category</h1>

            <section>
                <h2 className='text-3xl'>here you can create categories</h2>

                <p className='text-slate-400'>this process helps you to ogenise your questions</p>
            </section>

            <section>
                <StyledForm process={{ function: "create", target: "category" }}>
                    <input type="text" name='categoryName' id='categoryName' placeholder='category name' className='p-2 px-4 border border-gray bg-white rounded-lg shadow' />

                    <textarea name="description" id="description" placeholder='descripe your category' className='p-2 px-4 border border-gray bg-white rounded-lg shadow'></textarea>

                    <input type="submit" value="Create Category" className='bg-primary text-white cursor-pointer p-2 px-4 rounded-lg' />
                </StyledForm>
            </section>
        </main>
    )
}

export default CreateCategoryPage