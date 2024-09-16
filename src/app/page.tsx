import MaxWidthWrapper from '@/components/MaxWidthWrapper'
import Logo from '@/assets/Logo.svg'
import Checkmark from '@/assets/checkmark.svg'
import Airbnb from '@/assets/Airbnb.svg'
import Booking from '@/assets/try2.svg'
import PlumGuide from '@/assets/plumgroup.svg'
import { LANDING_FACTS } from '@/constants'
import { Button, buttonVariants } from '@/components/ui/button'
import Link from 'next/link'
import { cn } from '@/lib/utils'

const LandingPage = () => {
  return (
    <section className='relative'>
      <div className='bg-landing-hero-mobile sm:bg-landing-hero-tablet lg:bg-landing-hero-desktop  bg-cover bg-center w-auto h-[375px] lg:h-screen lg:w-1/2 lg:absolute top-0 right-0 lg:max-w-[660px]'></div>
      {/* <div className='py-10 px-5'> */}
      <MaxWidthWrapper className='py-10'>
        <Logo />

        <div className='mt-15 lg:mt-[100px]'>
          <div className='lg:max-w-sm'>
            <h1 className='text-h1-base font-bold text-black'>
              Explore the best camps on Earth.
            </h1>
            <p className='text-body-lighter'>
              YelpCamp is a curated list of the best camping spots on Earth.
              Unfiltered and unbiased reviews.
            </p>
          </div>
          {/* checkmarks */}
          <div className='flex flex-col gap-3 mt-3'>
            {LANDING_FACTS.map((item, index) => (
              <p key={index} className='inline-flex'>
                <Checkmark />
                <span className='text-body-lighter ml-3'>{item}</span>
              </p>
            ))}
          </div>
          <Link
            href={'/welcome'}
            className={cn(buttonVariants(), 'rounded-md mt-6')}
          >
            View Campgrounds
          </Link>
          {/* Partnered Section */}
          <div className='mt-9'>
            <span className='text-body-lighter'>Partnered with:</span>
            <div className='flex items-center gap-4'>
              <Airbnb className='w-fit h-[30px]' />
              <Booking className='w-fit h-[70px]' />
              <PlumGuide className='w-fit h-[15px]' />
            </div>
          </div>
        </div>
      </MaxWidthWrapper>
    </section>
  )
}

export default LandingPage
