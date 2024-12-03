import { createWorkflow } from '@/actions/workflows'
import React from 'react'

const NewWorkflow = () => {
    return (
        <main>
            <div className='flex flex-col gap-5 w-96 mx-auto bg-white dark:bg-white-dark p-5 rounded-lg shadow-xl '>
                <h1 className='text-3xl font-bold'>New Workflow</h1>

                <form action={createWorkflow} className='flex flex-col gap-5'>
                    <input name='name' type="text" className='p-2 px-4 bg-gray rounded-lg' placeholder='name' />
                    <input name='answer' type="text" className='p-2 px-4 bg-gray rounded-lg' placeholder='answer' />
                    <input name='status' type="text" className='p-2 px-4 bg-gray rounded-lg' placeholder='status' />
                    {/* <select name="categoryName" id="categoryName"></select> */}
                    <input name='categoryName' type="text" className='p-2 px-4 bg-gray rounded-lg' placeholder='category' />

                    <input type="submit" value="Submit" className='cursor-pointer p-2 px-4 bg-primary text-white rounded-lg' />
                </form>
            </div>
        </main>
    )
}

export default NewWorkflow