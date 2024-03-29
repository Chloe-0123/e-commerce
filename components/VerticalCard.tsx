import React from 'react';
import Image from 'next/image';
import { redirect } from 'next/dist/server/api-utils';

interface VerticalCardProps {
  imgSrc: string;
  imgName?: string;
  imgDesc: string;
  redirect?: string
}

export const VerticalCard = (props: VerticalCardProps) => {
  return (
    <>
      <a href={props.redirect ? `${props.redirect}` : '#'} className="tw-block tw-h-[500px] tw-w-1/4">
        <div
          className="tw-bg-cover tw-relative tw-h-full tw-flex-shrink-0 tw-hover:brightness-95"
          style={{ backgroundImage: `url(${props.imgSrc})` }}
        >
        </div>
        <div className="desc">
          <p className="tw-px-9 tw-text-center tw-mt-4 tw-text-[1.3rem]">{props.imgDesc}</p>
        </div>
      </a>
    </>
  );
};
