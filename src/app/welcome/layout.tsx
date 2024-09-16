import Header from '@/sections/Header'

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <div className='bg-white w-full h-screen'>
      <Header />
      {children}
    </div>
  )
}
