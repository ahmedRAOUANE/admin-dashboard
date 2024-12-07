import Link from 'next/link'
import React from 'react'

const LandingPage = () => {
  return (
    <main className='flex flex-col gap-5 container p-3 mx-auto text-lg'>
      {/* Hero */}
      <section className='flex flex-col items-center gap-5 w-full rounded-lg shadow p-4 md:p-20 bg-white' id='hero'>
        <h1 className='text-3xl font-bold'>Landing Page</h1>
        <p className='text-lg text-gray-700'>Lorem ipsum dolor sit amet consectetur</p>

        <Link href="/login" className='bg-primary text-white px-4 py-2 rounded-lg shadow-md'>Get Started</Link>
      </section>

      {/* about */}
      <section className='flex flex-col gap-5 w-full rounded-lg shadow p-4 bg-white md:px-20'>
        <h2 className='text-2xl font-bold'>About us</h2>

        <div className='flex gap-2 flex-col md:flex-row'>
          <p className='text-lg text-gray-700 flex-1 md:text-xl'>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Alias atque delectus rerum architecto nisi neque iusto ipsum, molestias sapiente ducimus.
          </p>

          <div className='flex-1 bg-gray'>
            some img
          </div>
        </div>
      </section>

      {/* features */}
      <section className='flex flex-col gap-5 w-full rounded-lg shadow p-4 bg-white md:px-20'>
        <h2 className='text-2xl font-bold'>Features</h2>

        <div className='flex gap-2 flex-col md:flex-row'>
          <p className='text-lg text-gray-700 flex-1 md:text-xl'>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Alias atque delectus rerum architecto nisi neque iusto ipsum, molestias sapiente ducimus.
          </p>

          <div className='flex-1 bg-gray'>
            some img
          </div>
        </div>
      </section>

      {/* contact */}
      <section className='flex flex-col gap-5 w-full rounded-lg shadow p-4 bg-white md:px-20'>
        <h2 className='text-2xl font-bold'>Contact us</h2>

        <div className='flex gap-2 flex-col md:flex-row'>
          <p className='text-lg text-gray-700 flex-1 md:text-xl'>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Alias atque delectus rerum architecto nisi neque iusto ipsum, molestias sapiente ducimus.
          </p>

          <div className='flex-1 bg-gray'>
            some img
          </div>
        </div>
      </section>
    </main>
  )
}

export default LandingPage