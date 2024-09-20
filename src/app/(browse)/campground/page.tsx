import CardWrapper from '@/components/CardWrapper'
import MaxWidthWrapper from '@/components/MaxWidthWrapper'
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import React from 'react'

const Campground = () => {
  return (
    <div>
      <MaxWidthWrapper>
        <Card>
          <img src='/MountUlap2.png' alt='' />
          <CardHeader className='flex justify-between items-center'>
            <CardTitle>Mount Ulap</CardTitle>
            <span>$104.99/night</span>
          </CardHeader>
          <CardContent>
            <p className='text-body-lighter'>
              Mount Ulap is a 7.7 kilometer moderately trafficked point-to-point
              trail located near Tuba, Benguet, Philippines that offers the
              chance to see wildlife and is rated as moderate. The trail is
              primarily used for hiking.
            </p>
          </CardContent>
          <CardFooter>
            <span>Submitted by Andrew Mills</span>
          </CardFooter>
        </Card>
      </MaxWidthWrapper>
    </div>
  )
}

export default Campground
