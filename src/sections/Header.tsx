import Image from 'next/image'
// import Logo from '/public/icons/Logo.svg'
import Logo from '@/assets/Logo.svg'
import Link from 'next/link'
import { buttonVariants } from '../components/ui/button'
import { cn } from '@/lib/utils'
import MaxWidthWrapper from '../components/MaxWidthWrapper'
import MobileNav from '@/components/MobileNav'

const Header = () => {
  return (
    <header className='h-[50px] flex items-center py-10'>
      <MaxWidthWrapper className='flex justify-between items-center'>
        {/* <Image src={Logo} alt='YelpCamp' /> */}
        <div className='flex gap-8'>
          <Logo />
          <Link href='/'>Home</Link>
        </div>

        <div className='hidden sm:flex items-center gap-6'>
          <Link href='/login'>Login</Link>
          <Link
            href='/register'
            className={cn(buttonVariants({}), 'bg-body-reg')}
          >
            Create an account
          </Link>
        </div>
        <MobileNav className='sm:hidden' />
      </MaxWidthWrapper>
    </header>
  )
}

export default Header
