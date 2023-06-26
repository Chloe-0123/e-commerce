"use client";
import Link from "next/link";



type Options = {
    options: Array<string>;
    section: string
  };
  
  export const DropdownMenu = ({ options, section }: Options) => {
    return (
      <div className=" tw-w-full tw-left-0 tw-list-none tw-absolute tw-z-10 tw-h-[100px] tw-bg-white">
        {options.map((x) => {
          return x.includes('img') || x.includes('png') ? (
            <li className="w-16 h-16" style={{ backgroundImage: `url(/img/${x})` }}></li>
          ) : (
            <li><Link href={`/${section}`}>{x}</Link></li>
          );
        })}
      </div>
    );
  };
  
  