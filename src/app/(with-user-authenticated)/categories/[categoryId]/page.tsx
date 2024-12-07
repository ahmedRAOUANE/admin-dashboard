import { handleGetSingleCategoryAction } from '@/actions/categoryAction';
import DeleteBtn from '@/components/DeleteBtn';
// import CategorizedQuestions from '@/components/CategorizedQuestions';
import { CategoryType } from '@/utils/types';
import Link from 'next/link';

const SingleCategoryPage = async ({ params }: { params: Promise<{ categoryId: string }> }) => {
    const categoryId = (await params).categoryId
    const { data }: { data: { category: CategoryType } } = await handleGetSingleCategoryAction(categoryId);

    return (
        <main className='flex flex-col gap-10 md:px-20'>
            <section className='flex flex-col gap-5 bg-white dark:bg-white-dark p-4 rounded-lg shadow relative'>
                <h1 className='text-3xl font-bold'>{data.category.categoryName}</h1>

                <p className='text-lg'>{data.category.description}</p>

                <div className='w-full flex justify-end gap-3'>
                    {
                        data.category._id && (
                            <>
                                <DeleteBtn targetId={data.category._id} target="category" />

                                <Link href={`/categories/${data.category._id}/edit`} className='p-1 px-4 justify-center bg-green rounded-md'>Edit</Link>
                            </>
                        )
                    }
                </div>
            </section>

            {/* <CategorizedQuestions categoryId={data.category._id && data.category._id || ""} /> */}
        </main>
    )
}

export default SingleCategoryPage