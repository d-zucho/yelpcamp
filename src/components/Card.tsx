import Image from 'next/image'
import { buttonVariants } from './ui/button'
import Link from 'next/link'
import { cn } from '@/lib/utils'

const Card = () => {
  return (
    <article className='max-w-sm p-4 relative border border-card-border flex flex-col w-fit'>
      <div className='w-full relative'>
        <Image
          src='/BuloySprings2.png'
          alt=''
          width={300}
          height={200}
          className=''
        />
      </div>
      <div className='mt-4'>
        <h3 className='font-bold text-body-reg'>Some Place</h3>
        <p className='text-body-lighter mt-2'>
          This is one of the best beach camping sites, beautiful and pristine.
        </p>
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
