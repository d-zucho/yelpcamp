import Header from '@/sections/Header'
import Logo from '@/assets/Logo.svg'
import MaxWidthWrapper from '@/components/MaxWidthWrapper'

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <div className='bg-white w-full h-screen '>
      <Header />
      {children}
      <MaxWidthWrapper className='w-full py-20'>
        <Logo className='' />
      </MaxWidthWrapper>
    </div>
  )
}
