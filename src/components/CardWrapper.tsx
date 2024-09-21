'use client'
import React from 'react'
import { Card, CardContent, CardFooter, CardHeader } from './ui/card'
import AuthHeader from './AuthHeader'
import BackButton from './BackButton'

interface CardWrapperProps {
  label: string
  title: string
  backButtonHref?: string | undefined
  backButtonLabel?: string | undefined
  children: React.ReactNode
}

const CardWrapper = ({
  label,
  title,
  backButtonHref,
  backButtonLabel,
  children,
}: CardWrapperProps) => {
  return (
    <Card className='xl:1/4  shadow-md'>
      <CardHeader>
        <AuthHeader label={label} title={title} />
      </CardHeader>
      <CardContent>{children}</CardContent>
      {backButtonHref && backButtonLabel && (
        <CardFooter>
          <BackButton label={backButtonLabel} href={backButtonHref} />
        </CardFooter>
      )}
    </Card>
  )
}

export default CardWrapper
