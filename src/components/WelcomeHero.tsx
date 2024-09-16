'use client'
import Link from 'next/link'
import MaxWidthWrapper from './MaxWidthWrapper'
import Search from '@/assets/SearchIcon.svg'
import { Button } from './ui/button'

const WelcomeHero = () => {
  return (
    <section className='text-body-lighter'>
      <MaxWidthWrapper className=''>
        <div className='bg-bg rounded-lg px-14 py-[70px]'>
          <div className='max-w-[400px] '>
            <div>
              <h2 className='text-black text-h2-base font-bold'>
                Welcome to YelpCamp
              </h2>
              <p>
                View our hand-picked campgrounds from all over the world, or add
                your own.
              </p>
            </div>
            <div className='my-4 flex  flex-col sm:flex-row sm:items-center gap-4'>
              <div className='relative'>
                <input
                  type='text'
                  placeholder='Search for camps'
                  className='h-16 pl-12 w-full sm:w-[300px] rounded-lg'
                />
                <Search className='text-body-lighter absolute top-1/2 left-6 -translate-y-1/2' />
              </div>
              <Button variant={'default'} className='bg-body-reg h-16 px-6'>
                Search
              </Button>
            </div>
            <Link href='/campgrounds/new' className='underline mt-4'>
              Or add your own campground
            </Link>
          </div>
        </div>
      </MaxWidthWrapper>
    </section>
  )
}

export default WelcomeHero
