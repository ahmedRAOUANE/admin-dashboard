import { createFaq } from '@/actions/faqs'
import React from 'react'

const CreateFaq = () => {
    return (
        <main>
            <div className='flex flex-col gap-5 w-96 mx-auto bg-white dark:bg-white-dark p-5 rounded-lg shadow-xl '>
                <h1 className='text-3xl font-bold'>Create Faq</h1>

                <form action={createFaq} className='flex flex-col gap-5'>
                    <input name='question' type="text" className='p-2 px-4 bg-gray dark:bg-gray-dark rounded-lg' placeholder='question' />
                    <input name='answer' type="text" className='p-2 px-4 bg-gray dark:bg-gray-dark rounded-lg' placeholder='answer' />
                    <input name='category' type="text" className='p-2 px-4 bg-gray dark:bg-gray-dark rounded-lg' placeholder='category' />

                    <select name="type" id="type" defaultValue={"type 1"} className='cursor-pointer bg-gray dark:bg-gray-dark p-2 px-4 rounded-lg'>
                        <option value="type 1">type 1</option>
                        <option value="type 2">type 2</option>
                    </select>

                    <div className="flex gap-3">
                        <input name='isRequired' id='isRequired' type="checkbox" className='p-2 px-4 bg-gray dark:bg-gray-dark rounded-lg' />
                        <label htmlFor="isRequired" className='cursor-pointer'>is Required</label>
                    </div>

                    <div className="flex gap-3">
                        <input name='isActive' id='isActive' type="checkbox" className='p-2 px-4 bg-gray dark:bg-gray-dark rounded-lg' />
                        <label htmlFor="isActive" className='cursor-pointer'>is Active</label>
                    </div>

                    <input type="submit" value={"Submit"} className='cursor-pointer p-2 px-4 bg-primary dark:bg-primary-dark text-white rounded-lg' />
                </form>
            </div>
        </main>
    )
}

export default CreateFaq