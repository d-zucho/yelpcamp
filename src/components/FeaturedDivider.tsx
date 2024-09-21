import React from 'react'

interface Props {
  title: string
}

const FeaturedDivider = ({ title }: Props) => {
  return (
    <div className='w-fit pr-20'>
      <h2 className='text-2xl text-red-500 font-bold'>{title}</h2>
      <div className='border-b-2 border-slate-200/80'></div>
    </div>
  )
}

export default FeaturedDivider
