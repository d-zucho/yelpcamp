import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from './ui/sheet'
import * as VisuallyHidden from '@radix-ui/react-visually-hidden'
import Menu from '@/assets/menu.svg'
import Logo from '@/assets/Logo.svg'
import Link from 'next/link'
import { buttonVariants } from './ui/button'
import { cn } from '@/lib/utils'

interface MobileNavProps {
  className?: string
}

const MobileNav = ({ className }: MobileNavProps) => {
  return (
    <div className={className}>
      <Sheet>
        <SheetTrigger>
          <Menu className='size-[50px] p-3 text-black bg-[#F9F6F1] rounded-sm' />
        </SheetTrigger>
        <SheetContent className='max-w-xs'>
          <SheetHeader>
            <Logo />
            <VisuallyHidden.Root>
              <SheetTitle>YelpCamp</SheetTitle>
              <SheetDescription>Explore the best campgrounds</SheetDescription>
            </VisuallyHidden.Root>
            <div className='w-full flex flex-col gap-10 pt-12 items-start'>
              <SheetClose>
                <Link href='/'>Home</Link>
              </SheetClose>
              <SheetClose>
                <Link href='/auth/login'>Login</Link>
              </SheetClose>
              <div className='w-full'>
                <SheetClose className='w-full'>
                  <Link
                    href={`/auth/register`}
                    className={cn(buttonVariants({}), 'w-5/6')}
                  >
                    Create an account
                  </Link>
                </SheetClose>
              </div>
            </div>
          </SheetHeader>
        </SheetContent>
      </Sheet>
    </div>
  )
}

export default MobileNav
