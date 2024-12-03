import OpenModalBtn from '@/components/modals/OpenModalBtn'
import { getSingleWorkflow } from '@/data-access/workflows'
import { WorkflowType } from '@/utils/types'
import React from 'react'

const WorkflowPAge = async ({ params }: { params: Promise<{ workflowId: string }> }) => {
    const workflowId = (await params).workflowId

    const { workflow }: { workflow: WorkflowType } = await getSingleWorkflow(workflowId)

    return (
        <main className='flex flex-col gap-10 md:px-20'>
            <div className='flex flex-col gap-5 bg-white dark:bg-white-dark p-4 rounded-lg shadow relative'>
                <h1 className='text-3xl font-bold'>{workflow.name}</h1>
                <p className='text-lg bg-gray dark:bg-gray-dark px-2 rounded-md'>{workflow.answer}</p>
                <p className='text-lg bg-gray dark:bg-gray-dark px-2 rounded-md'>{workflow.description}</p>

                <div className="flex gap-3">
                    {workflow.category && (<p className='text-lg bg-gray dark:bg-gray-dark px-2 rounded-md'>{workflow.category}</p>)}
                    {workflow.createdAt && (<p className='text-lg bg-gray dark:bg-gray-dark px-2 rounded-md'>{workflow.createdAt}</p>)}
                </div>

                <OpenModalBtn className='absolute top-2 right-2' />
            </div>

            <div className='flex flex-col gap-5 bg-white dark:bg-white-dark p-4 rounded-lg shadow relative'>
                <h1 className='text-3xl font-bold'>Categories Related with this Workflow</h1>

                <div>
                    {
                        workflow?.faqs && workflow?.faqs?.length > 0
                            ? workflow?.faqs?.map((faq, index) => (
                                <div key={index} className='flex flex-col gap-5 bg-white dark:bg-white-dark p-4 rounded-lg shadow relative'>
                                    <h1 className='text-3xl font-bold'>{faq.picklist}</h1>
                                </div>
                            )) : (
                                <div className='flex flex-col gap-5 bg-white dark:bg-white-dark p-4 rounded-lg shadow relative'>
                                    No Categories Related with this Workflow
                                </div>
                            )
                    }
                </div>
            </div>
        </main>
    )
}

export default WorkflowPAge