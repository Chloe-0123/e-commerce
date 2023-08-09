"use client";
import { link } from "fs";
import Link from "next/link";



type Options = {
    options: Array<string>;
    section: string
  };
  
  export const DropdownMenu = ({ options, section }: Options) => {
    return (
      <div className=" tw-w-full tw-left-0 tw-list-none tw-absolute tw-z-10 tw-h-[150px] tw-bg-[rgb(250,249,247)] tw-pt-4">
        {options.map((x) => {
          return x === "Shop All" ? <li><Link href={`${section}`} className="tw-text-[1.2rem]">{x}</Link></li> : <li><Link href={`/furniture/${x}`} className="tw-text-[1.2rem]">{x}</Link></li>;
        })}
      </div>
    );
  };
  
  