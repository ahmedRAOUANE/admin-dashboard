import { QuestionType } from '@/utils/types'

// server actions
import { handlegetSingleQuestionAction } from '@/actions/questionActions';

// components
import DeleteBtn from '@/components/DeleteBtn';
import Link from 'next/link';

const SingleQuestion = async ({ params }: { params: Promise<{ questionId: string }> }) => {
    const questionId = (await params).questionId

    const { data }: { data: {question: QuestionType} } = await handlegetSingleQuestionAction(questionId);
    const { question } = data;

    return (
        <main className='flex flex-col gap-10 md:px-20'>
            <div className='flex flex-col gap-5 bg-white dark:bg-white-dark p-4 rounded-lg shadow relative'>
                <h1 className='text-3xl font-bold'>{question.question}</h1>

                <div className="flex gap-3">
                    <p className='text-lg bg-gray dark:bg-gray-dark px-2 rounded-md'>{question.categoryObject.categoryName}</p>
                </div>

                <div className='w-full flex justify-end gap-3'>
                    {
                        question._id && (
                            <>
                                <DeleteBtn targetId={question._id} target="question" />

                                <Link href={`/questions/${question._id}/edit`} className='p-1 px-4 justify-center bg-green rounded-md'>Edit</Link>
                            </>
                        )
                    }
                </div>
            </div>
        </main>
    )
}

export default SingleQuestion