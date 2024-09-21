import AuthLayoutHeader from '@/components/AuthLayoutHeader'
import React from 'react'

interface AuthLayoutProps {
  children: React.ReactNode
}

const AuthLayout = ({ children }: AuthLayoutProps) => {
  return (
    <div className='w-full flex flex-col lg:flex-row'>
      <div className='w-full lg:w-1/2'>
        <AuthLayoutHeader />
        {children}
      </div>
      <div className=' lg:w-1/2 h-screen lg:flex bg-bg relative'>
        <h2 className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 font-bold text-2xl leading-[39px] tracking-normal'>
          “YelpCamp has honestly saved me hours of research time, and the camps
          on here are definitely well picked and added.”
        </h2>
      </div>
    </div>
  )
}

export default AuthLayout
