import Card from '@/components/Card'
import MaxWidthWrapper from '@/components/MaxWidthWrapper'
import React from 'react'

const WelcomeFeatured = () => {
  return (
    <section>
      <MaxWidthWrapper>
        <div className='grid sm:grid-cols-2 md:grid-cols-3'>
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
        </div>
      </MaxWidthWrapper>
    </section>
  )
}

export default WelcomeFeatured
