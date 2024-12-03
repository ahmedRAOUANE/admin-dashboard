import { getSingleFaq, updateFaq } from "@/data-access/faqs";
import { FaqType } from "@/utils/types";

const EditFAQPage = async ({ params }: { params: Promise<{ faqId: string }> }) => {
    const currentFaqId = (await params).faqId;

    const { faq }: { faq: FaqType } = await getSingleFaq(currentFaqId);

    const handleFaqEdit = async (formData: FormData) => {
        "use server";

        const updatedData: FaqType = {
            question: formData.get("question") as string,
            answer: formData.get("answer") as string,
            category: formData.get("category") as string,
            type: formData.get("type") as string,
        };

        try {
            await updateFaq(currentFaqId, updatedData);
            // redirect("/faqs"); // redirect function has issues?!
        } catch (error) {
            console.error("Failed to update faq:", error);
            throw new Error("Error updating the faq");
        }
    }

    return (
        <main>
            <div className='flex flex-col gap-5 w-96 mx-auto bg-white dark:bg-white-dark p-5 rounded-lg shadow-xl '>
                <h1 className='text-3xl font-bold'>Create Faq</h1>

                <form action={handleFaqEdit} className='flex flex-col gap-5'>
                    <input defaultValue={faq.question} name='question' type="text" className='p-2 px-4 bg-gray dark:bg-gray-dark rounded-lg' placeholder='question' />
                    <input defaultValue={faq.answer} name='answer' type="text" className='p-2 px-4 bg-gray dark:bg-gray-dark rounded-lg' placeholder='answer' />
                    <input defaultValue={faq.category} name='category' type="text" className='p-2 px-4 bg-gray dark:bg-gray-dark rounded-lg' placeholder='category' />

                    <select name="type" id="type" defaultValue={faq.type} className='cursor-pointer bg-gray dark:bg-gray-dark p-2 px-4 rounded-lg'>
                        <option value="type 1">type 1</option>
                        <option value="type 2">type 2</option>
                    </select>

                    <div className="flex gap-3">
                        <input defaultValue={faq.isRequired ? "on" : "off"} name='isRequired' id='isRequired' type="checkbox" className='p-2 px-4 bg-gray dark:bg-gray-dark rounded-lg' />
                        <label htmlFor="isRequired" className='cursor-pointer'>is Required</label>
                    </div>

                    <div className="flex gap-3">
                        <input defaultValue={faq.isActive ? "on" : "off"} name='isActive' id='isActive' type="checkbox" className='p-2 px-4 bg-gray dark:bg-gray-dark rounded-lg' />
                        <label htmlFor="isActive" className='cursor-pointer'>is Active</label>
                    </div>

                    <input type="submit" value={"Submit"} className='cursor-pointer p-2 px-4 bg-primary dark:bg-primary-dark text-white rounded-lg' />
                </form>
            </div>
        </main>
    )
}

export default EditFAQPage