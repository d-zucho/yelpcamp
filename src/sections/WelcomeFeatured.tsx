import Card from '@/components/FeaturedCard'
import MaxWidthWrapper from '@/components/MaxWidthWrapper'
import { HoverEffect } from '@/components/ui/card-hover-effect'
import { WELCOME_FEATURED_CARDS } from '@/constants'
import React from 'react'

const WelcomeFeatured = () => {
  return (
    <section>
      <MaxWidthWrapper>
        <div className='grid sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-20 justify-center'>
          {WELCOME_FEATURED_CARDS.map((card, index) => (
            <Card key={index} {...card} />
          ))}
        </div>
      </MaxWidthWrapper>
    </section>
  )
}

export default WelcomeFeatured
