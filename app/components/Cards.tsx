import React from 'react';
import Image from 'next/image';

interface CardProps {
    imgSrc: string
    imgName: string
    imgDesc: string
}

export const Cards = ( props : CardProps ) => {
    return (
        <>
        <a href="#" className='block h-full w-1/3' >
            <div className="bg-cover relative h-full flex-shrink-0 hover:brightness-95" style={{ backgroundImage: `url(${props.imgSrc})` }}>
            <h5 className='absolute top-1/2 right-1/2 text-3xl transform translate-x-1/2 -translate-y-1/2'>{props.imgName}</h5>
            </div>
            <div className="desc">
            <p className='px-9 text-center'>{props.imgDesc}</p>
            </div>
        </a>
        
        </>
    );
};
