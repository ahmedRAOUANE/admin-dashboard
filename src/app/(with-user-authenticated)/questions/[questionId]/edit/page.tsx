import { handlegetSingleQuestionAction } from "@/actions/questionActions";
import CategorySelect from "@/components/CategorySelect";
import StyledForm from "@/components/StyledForm";
import { QuestionType } from "@/utils/types";

const EditFAQPage = async ({ params }: { params: Promise<{ questionId: string }> }) => {
    const currentQuestionId = (await params).questionId;

    const { data }: { data: { question: QuestionType } } = await handlegetSingleQuestionAction(currentQuestionId);

    return (
        <main>
            <div className='flex flex-col gap-5 w-96 mx-auto bg-white dark:bg-white-dark p-5 rounded-lg shadow-xl '>
                <h1 className='text-3xl font-bold'>Create Faq</h1>

                <StyledForm process={{ function: "update", target: "question", targetId: currentQuestionId }}>
                    <input defaultValue={data.question.question} name='question' type="text" className='p-2 px-4 bg-gray dark:bg-gray-dark rounded-lg' placeholder='question' />
                    <input defaultValue={data.question.answer} name='answer' type="text" className='p-2 px-4 bg-gray dark:bg-gray-dark rounded-lg' placeholder='answer' />

                    <CategorySelect />

                    <input type="submit" value={"Submit"} className='cursor-pointer p-2 px-4 bg-primary dark:bg-primary-dark text-white rounded-lg' />
                </StyledForm>
            </div>
        </main>
    )
}

export default EditFAQPage