import Link from 'next/link'
import React from 'react'
import Logo from '@/assets/Logo.svg'
import LeftArrow from '@/components/LeftArrow'
import MaxWidthWrapper from './MaxWidthWrapper'

const AuthLayoutHeader = () => {
  return (
    <div className='py-10 '>
      <MaxWidthWrapper className='flex justify-between items-center '>
        <Link href={'/welcome'}>
          <Logo />
        </Link>
        <Link
          href='/welcome'
          className='text-body-lighter flex items-center gap-1'
        >
          <span>
            <LeftArrow className='mb-1' />
          </span>
          <span>Back to campgrounds</span>
        </Link>
      </MaxWidthWrapper>
    </div>
  )
}

export default AuthLayoutHeader
