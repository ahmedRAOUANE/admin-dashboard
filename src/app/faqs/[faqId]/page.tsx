import { getSingleFaq } from '@/data-access/faqs'
import { FaqType } from '@/utils/types'
import OpenModalBtn from '@/components/modals/OpenModalBtn';

const SingleFAQ = async ({ params }: { params: Promise<{ faqId: string }> }) => {
    const faqId = (await params).faqId

    const { faq }: { faq: FaqType } = await getSingleFaq(faqId);

    return (
        <main className='flex flex-col gap-10 md:px-20'>
            <div className='flex flex-col gap-5 bg-white dark:bg-white-dark p-4 rounded-lg shadow relative'>
                <h1 className='text-3xl font-bold'>{faq.question}</h1>

                <div className="flex gap-3">
                    <p className='text-lg bg-gray dark:bg-gray-dark px-2 rounded-md'>{faq.category}</p>
                    <p className='text-lg bg-gray dark:bg-gray-dark px-2 rounded-md'>{faq.type}</p>
                    {faq.isRequired && (<p className='text-lg bg-gray dark:bg-gray-dark px-2 rounded-md'>Required</p>)}
                </div>

                <OpenModalBtn className='absolute top-2 right-2' />
            </div>
        </main>
    )
}

export default SingleFAQ