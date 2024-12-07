import Footer from '@/components/Footer'
import Header from '@/components/Header'
import React from 'react'

const UserNotAuthenticatedLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className='flex flex-col justify-start bg-gray text-foreground'>
      <Header />

      {children}

      <Footer />
    </div>
  )
}

export default UserNotAuthenticatedLayout