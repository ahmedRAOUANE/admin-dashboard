
import { getSingleWorkflow, updateWorkflow } from "@/data-access/workflows"
import { WorkflowType } from "@/utils/types";

const EditWorkflowPage = async ({ params }: { params: Promise<{ workflowId: string }> }) => {
    const workflowId = (await params).workflowId;

    const { workflow }: { workflow: WorkflowType } = await getSingleWorkflow(workflowId);

    const handleUpdateWorkflow = async (formData: FormData) => {
        "use server";

        const updatedData: WorkflowType = {
            name: formData.get("name") as string,
            answer: formData.get("answer") as string,
            status: formData.get("status") as string,
            category: formData.get("categoryName") as string,
            description: formData.get("description") as string
        };

        try {
            await updateWorkflow(workflowId, updatedData);
            // redirect(`workflows/${workflowId}`); // redirect function has issues?!
        } catch (error) {
            console.error("Failed to update workflow:", error);
            throw new Error("Error updating the workflow");
        }
    };

    return (
        <main>
            <div className='flex flex-col gap-5 w-96 mx-auto bg-white dark:bg-white-dark p-5 rounded-lg shadow-xl '>
                <h1 className='text-3xl font-bold'>New Workflow</h1>

                <form action={handleUpdateWorkflow} className='flex flex-col gap-5'>
                    <input defaultValue={workflow.name} name='name' type="text" className='p-2 px-4 bg-gray dark:bg-gray-dark rounded-lg' placeholder='name' />
                    <input defaultValue={workflow.answer} name='answer' type="text" className='p-2 px-4 bg-gray dark:bg-gray-dark rounded-lg' placeholder='answer' />
                    <input defaultValue={workflow.status} name='status' type="text" className='p-2 px-4 bg-gray dark:bg-gray-dark rounded-lg' placeholder='status' />
                    {/* <input defaultValue={workflow.description} name='description' type="text" className='p-2 px-4 bg-gray dark:bg-gray-dark rounded-lg' placeholder='description' /> */}
                    <textarea defaultValue={workflow.description} name="description" id="description" placeholder="description" className='p-2 px-4 bg-gray dark:bg-gray-dark rounded-lg'></textarea>
                    
                    {/* <select name="categoryName" id="categoryName"></select> */}
                    <input defaultValue={workflow.category} name='categoryName' type="text" className='p-2 px-4 bg-gray dark:bg-gray-dark rounded-lg' placeholder='category' />

                    <input type="submit" value="Submit" className='cursor-pointer p-2 px-4 bg-primary dark:bg-primary-dark text-white rounded-lg' />
                </form>
            </div>
        </main>
    )
}

export default EditWorkflowPage

