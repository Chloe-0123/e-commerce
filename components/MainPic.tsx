import React from 'react'

interface MainPicProps {
    url: string,
    text?: string
    category?:boolean
}

export const MainPic = ({ url, text, category }:MainPicProps) => {
  return (
    <>
    <div className="slide1 tw-h-screen">
      <a href="#" className="mainPic tw-block tw-h-5/6" style={{
        backgroundImage: `url(${url})`,
        backgroundSize: 'cover',
      }}>
      </a>  
    </div>
    {text && 
    
    <div className="mainPageText tw-absolute tw-top-64 tw-left-[42%] tw-flex tw-flex-col tw-gap-4">
      <h2 className={`tw-text-5xl ${category ? 'tw-text-white' : null } `}>{text}</h2>
    </div>}
  </>
  )

  
}
