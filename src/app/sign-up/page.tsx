import MaxWidthWrapper from '@/components/MaxWidthWrapper'
import Logo from '@/assets/Logo.svg'
import Link from 'next/link'
import LeftArrow from '@/components/LeftArrow'
import { motion, MotionConfig } from 'framer-motion'
import SignUpForm from '@/components/SignUpForm'

const SignUpPage = () => {
  return (
    <div className='w-full h-screen'>
      <MaxWidthWrapper className='py-10'>
        <div className='flex justify-between items-center'>
          <Logo />
          <Link
            href='/welcome'
            className='text-body-lighter flex items-center gap-1'
          >
            <span>
              <LeftArrow className='mb-1' />
            </span>
            <span>Back to campgrounds</span>
          </Link>
        </div>
        <h2 className='text-body-reg text-h2-base font-bold'>
          Start exploring camps from all around the world.
        </h2>
        <SignUpForm />
      </MaxWidthWrapper>
    </div>
  )
}

export default SignUpPage
