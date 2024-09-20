import AuthLayoutHeader from '@/components/AuthLayoutHeader'
import React from 'react'

interface AuthLayoutProps {
  children: React.ReactNode
}

const AuthLayout = ({ children }: AuthLayoutProps) => {
  return (
    <div>
      <AuthLayoutHeader />
      {children}
    </div>
  )
}

export default AuthLayout
