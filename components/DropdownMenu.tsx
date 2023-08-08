"use client";
import { link } from "fs";
import Link from "next/link";



type Options = {
    options: Array<string>;
    section: string
  };
  
  export const DropdownMenu = ({ options, section }: Options) => {
    return (
      <div className=" tw-w-full tw-left-0 tw-list-none tw-absolute tw-z-10 tw-h-[100px] tw-bg-white">
        {options.map((x) => {
          return x === "Shop All" ? <li><Link href={`${section}`}>{x}</Link></li> : <li><Link href={`/furniture/${x}`}>{x}</Link></li>;
        })}
      </div>
    );
  };
  
  