import BarChart from '@/components/BarChart';
import StyledSearchbar from '@/components/StyledSearchbar'
import { DashboardCardsData } from '@/utils/staticData'

const DashboardPage = () => {
  return (
    <main className='flex flex-col gap-10 md:px-20'>
      <StyledSearchbar className="flex items-center gap-2 shadow border border-gray rounded-lg p-2 bg-white w-full md:w-1/2 mx-auto" />

      {/* Banner */}
      <section className='flex flex-col items-center gap-5 w-full rounded-lg shadow p-4 md:p-20 bg-white'>
        <h2 className='text-3xl font-bold'>Lorem ipsum dolor sit amet consectetur</h2>
        <p className='text-lg text-gray-700'>Lorem ipsum dolor sit amet consectetur</p>
      </section>

      {/* Widget */}
      <section className='flex flex-col gap-5 w-full'>
        <h2 className='text-3xl font-bold w-full text-start'>Widget</h2>

        <div className='flex gap-5 w-full overflow-auto'>
          {
            DashboardCardsData.map((item, idx) => (
              <div key={idx} className='min-w-[300px] flex flex-col items-center gap-5 flex-1 rounded-lg shadow p-5 bg-white'>
                <div className='flex justify-between w-full'>
                  <h2 className='text-3xl font-bold'>{item.title}</h2>
                  <p className='text-lg text-gray-700'>{item.value}</p>
                </div>

                <p className='text-lg text-gray-700'>{item.text}</p>

                <p className='text-lg text-gray-700 text-start w-full'>{item.createdAt}</p>
              </div>
            ))
          }
        </div>
      </section>

      {/* Statistics */}
      <section className='flex flex-col items-center gap-5 w-full'>
        <h2 className='text-3xl font-bold w-full text-start'>Statistics</h2>

        <BarChart />
      </section>
    </main>
  )
}

export default DashboardPage