import MaxWidthWrapper from '@/components/MaxWidthWrapper'
import Logo from '@/assets/Logo.svg'
import Link from 'next/link'
import LeftArrow from '@/components/LeftArrow'
import { motion, MotionConfig } from 'framer-motion'
import SignUpForm from '@/components/RegisterForm'
import RegisterForm from '@/components/RegisterForm'

const RegisterPage = () => {
  return (
    <div className='w-full h-screen'>
      <MaxWidthWrapper className=''>
        <h2 className='text-body-reg text-h2-base font-bold'>
          Start exploring camps from all around the world.
        </h2>
        <RegisterForm />
      </MaxWidthWrapper>
    </div>
  )
}

export default RegisterPage
