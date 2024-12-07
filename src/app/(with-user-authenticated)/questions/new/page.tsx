import CategorySelect from '@/components/CategorySelect'
import StyledForm from '@/components/StyledForm'

const CreateQuestion = async () => {
    return (
        <main>
            <section>
                <h1 className='text-3xl font-bold'>Create Question</h1>

                <p className='text-lg text-gray-700'>Lorem ipsum dolor sit amet consectetur</p>
            </section>

            <section className=''>
                <StyledForm process={{ function: "create", target: "question" }}>
                    <input name='question' type="text" className='p-2 px-4 bg-white dark:bg-white-dark rounded-lg' placeholder='question' />
                    <input name='answer' type="text" className='p-2 px-4 bg-white dark:bg-white-dark rounded-lg' placeholder='answer' />

                    <CategorySelect className='bg-white p-2 px-4 rounded-lg' />

                    <input type="submit" value={"Submit"} className='cursor-pointer p-2 px-4 bg-primary dark:bg-primary-dark text-white rounded-lg' />
                </StyledForm>
            </section>
        </main>
    )
}

export default CreateQuestion
