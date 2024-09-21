import { Card } from '@/components/ui/card'
import { WELCOME_FEATURED_CARDS } from '@/constants'
import Image from 'next/image'
import React, { Fragment } from 'react'

const MovingCards = () => {
  return (
    <div>
      <div className='mt-12 lg:mt-20 flex overflow-x-clip [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)] py-4 -my-4'>
        <div className='flex gap-8 flex-none animate-move-left pr-8 [animation-duration:90s] hover:[animation-play-state:paused]'>
          {...new Array(2).fill(0).map((_, index) => (
            <Fragment key={index}>
              {WELCOME_FEATURED_CARDS.map((card, index) => (
                <div className='max-w-xs'>
                  <Card key={index} {...card} />
                </div>
              ))}
            </Fragment>
          ))}
        </div>
      </div>
    </div>
  )
}

export default MovingCards
