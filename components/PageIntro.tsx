import React from 'react'

interface PageIntroProps {
    title: string,
    p: string
}

export const PageIntro = ({ title, p }:PageIntroProps) => {
  return (
    <div>
        <h2 className='tw-text-[2.3rem] tw-text-center tw-mb-8'>{title}</h2>
        <p className='tw-text-[1.3rem] tw-text-center'>{p}</p>
    </div>
  )
}
