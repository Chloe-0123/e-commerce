import React from 'react'

interface MainPicProps {
    url: string
}

export const MainPic = ({ url }:MainPicProps) => {
  return (
    <div className="slide1 tw-h-screen">
            <a href="#" className="mainPic tw-block tw-h-5/6" style={{
              backgroundImage: `url(${url})`,
              backgroundSize: 'cover',
            }}></a>
    </div>
  )

  
}
