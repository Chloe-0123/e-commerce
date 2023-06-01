
"use client";


type Options = {
    options: Array<string>;
  };
  
  export const DropdownMenu = ({ options }: Options) => {
    return (
      <div className="tw-bg-slate-500 tw-w-full tw-left-0 tw-list-none tw-absolute tw-z-10">
        {options.map((x) => {
          return x.includes('img') || x.includes('png') ? (
            <li className="w-16 h-16" style={{ backgroundImage: `url(/img/${x})` }}></li>
          ) : (
            <li>{x}</li>
          );
        })}
      </div>
    );
  };
  
  