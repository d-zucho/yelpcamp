import Image from 'next/image'
import { buttonVariants } from './ui/button'
import Link from 'next/link'
import { cn } from '@/lib/utils'

interface CardProps {
  image: string
  title: string
  description: string
}

const Card = ({ image, title, description }: CardProps) => {
  return (
    <article className='p-4 relative border border-card-border flex flex-col w-fit rounded-md'>
      <div className='w-full relative'>
        <Image
          src={image}
          alt='Beautiful Destinations'
          width={300}
          height={200}
          className='w-full'
        />
      </div>
      <div className='mt-4'>
        <h3 className='font-bold text-body-reg'>{title}</h3>
        <p className='text-body-lighter mt-2'>{description}</p>
      </div>
      <Link
        href={'/welcome'}
        className={cn(buttonVariants({ variant: 'outline' }), 'mt-4 font-bold')}
      >
        Read More
      </Link>
    </article>
  )
}

export default Card
