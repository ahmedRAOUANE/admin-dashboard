import StyledSearchbar from '@/components/StyledSearchbar'
import ToggleThemeBtn from '@/components/ToggleThemeBtn'

const SettingsPage = () => {
    return (
        <main className='flex flex-col gap-10 md:px-20'>
            <StyledSearchbar className="flex items-center gap-2 shadow border border-gray dark:border-gray-dark rounded-lg p-2 bg-white dark:bg-white-dark w-full md:w-1/2 mx-auto" />

            {/* Banner */}
            <section className='flex flex-col items-center gap-5 w-full rounded-lg shadow p-4 md:p-20 bg-white dark:bg-white-dark'>
                <h2 className='text-3xl font-bold'>Chatbot Admin</h2>
                <p className='text-lg text-gray-700'>v1.4.2 - 2024 Updated version</p>
            </section>

            {/* Widget */}
            <section className='flex flex-col gap-5 w-full'>
                <h2 className='text-3xl font-bold w-full text-start'>Theme</h2>

                <div className='flex justify-between w-full bg-white dark:bg-white-dark p-2 rounded-lg shadow'>
                    <p className='text-lg'>Dark Theme</p>

                    <ToggleThemeBtn />
                </div>
            </section>

            {/* Add more Sections later */}
        </main>
    )
}

export default SettingsPage