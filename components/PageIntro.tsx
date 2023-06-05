import React from 'react'

interface PageIntroProps {
    title: string,
    p: string
}

export const PageIntro = ({ title, p }:PageIntroProps) => {
  return (
    <div>
        <h2>{title}</h2>
        <p>{p}</p>
    </div>
  )
}
