import { handleGetSingleCategoryAction } from '@/actions/categoryAction';
import StyledForm from '@/components/StyledForm';
import { CategoryType } from '@/utils/types';
import React from 'react'

const EditCategory = async ({ params }: { params: Promise<{ categoryId: string }> }) => {
  const categoryId = (await params).categoryId
  const { data }: { data: { category: CategoryType } } = await handleGetSingleCategoryAction(categoryId);

  console.log("category: ", data.category);

  return (
    <main className='flex flex-col gap-10 md:px-20'>
      <h1 className='text-3xl font-bold'>Update Category</h1>

      <section>
        <h2 className='text-3xl'>here you can update your categories</h2>

        <p className='text-slate-400'>this process helps you to ogenise your questions</p>
      </section>

      <section>
        <StyledForm process={{ function: "update", target: "category", targetId: data.category._id }} >
          <input defaultValue={data.category.categoryName} type="text" name='categoryName' id='categoryName' placeholder='category name' className='p-2 px-4 border border-gray bg-white rounded-lg shadow' />

          <textarea defaultValue={data.category.description} name="description" id="description" placeholder='descripe your category' className='p-2 px-4 border border-gray bg-white rounded-lg shadow'></textarea>

          <input type="submit" value="Update Category" className='bg-primary text-white cursor-pointer p-2 px-4 rounded-lg' />
        </StyledForm>
      </section>
    </main>
  )
}

export default EditCategory