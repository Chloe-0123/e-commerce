import React from 'react';
import Image from 'next/image';

interface CardProps {
  imgSrc: string;
  imgName: string;
  imgDesc: string;
  orientation?: string;
  href: string;
}

export const Cards = (props: CardProps) => {
  return (
    <>
      <a href={props.href} className="tw-block tw-h-full tw-w-1/3">
        <div className="tw-relative tw-h-full tw-flex-shrink-0 tw-hover:brightness-95 tw-text-white">
          {/* Use the Next.js Image component to display the image */}
          <Image src={props.imgSrc} alt={props.imgName} layout="fill" objectFit="cover" />
          <h5 className="tw-absolute tw-top-1/2 tw-left-1/2 tw-transform tw--translate-x-1/2 tw--translate-y-1/2 tw-text-3xl">
            {props.imgName}
          </h5>
        </div>
        <div className="desc tw-mt-5 tw-text-[1.2rem]">
          <p className="tw-px-9 tw-text-center">{props.imgDesc}</p>
        </div>
      </a>
    </>
  );
};
