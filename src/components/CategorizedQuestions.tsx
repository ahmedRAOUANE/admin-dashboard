import { handleGetQuestionsByCategoryAction } from "@/actions/questionActions";
import { QuestionType } from "@/utils/types";

const CategorizedQuestions = async ({ categoryId }: { categoryId: string }) => {
    const { data }: { data: { questions: QuestionType[] } } = await handleGetQuestionsByCategoryAction(categoryId);

    console.log("data: ", data);
    return (
        <section>
            <h2 className='text-3xl font-bold'>Questions</h2>


        </section>
    )
}

export default CategorizedQuestions