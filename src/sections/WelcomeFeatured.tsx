import Card from '@/components/FeaturedCard'
import FeaturedDivider from '@/components/FeaturedDivider'
import MaxWidthWrapper from '@/components/MaxWidthWrapper'
import { WELCOME_FEATURED_CARDS } from '@/constants'
import { Fragment } from 'react'

const WelcomeFeatured = () => {
  return (
    <section>
      <MaxWidthWrapper>
        <div className='mt-20'>
          <FeaturedDivider title='Newly Featured' />
          <div className='grid sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-12 justify-center'>
            {new Array(1)
              .fill(null)
              .map((_, index) =>
                WELCOME_FEATURED_CARDS.map((card, index) => (
                  <Card key={index} {...card} />
                ))
              )}
          </div>
        </div>

        <div className='mt-8 lg:mt-20'>
          <FeaturedDivider title='Recently Added' />
          <div className='mt-5 flex overflow-x-clip [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)] py-4 -my-4 '>
            <div className='flex gap-8 flex-none animate-move-left pr-8 [animation-duration:90s] hover:[animation-play-state:paused] max-w-fit'>
              {...new Array(2).fill(0).map((_, index) => (
                <Fragment key={index}>
                  {WELCOME_FEATURED_CARDS.map((card, index) => (
                    <div className='text-xs'>
                      <Card key={index} {...card} />
                    </div>
                  ))}
                </Fragment>
              ))}
              ...
            </div>
          </div>
        </div>
      </MaxWidthWrapper>
    </section>
  )
}

export default WelcomeFeatured
