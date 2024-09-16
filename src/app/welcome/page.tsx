import WelcomeHero from '@/components/WelcomeHero'
import Header from '@/sections/Header'
import WelcomeFeatured from '@/sections/WelcomeFeatured'
import Image from 'next/image'

export default function Home() {
  return (
    <div className=''>
      <WelcomeHero />
      <WelcomeFeatured />
    </div>
  )
}
