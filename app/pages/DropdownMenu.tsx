
"use client";


type Options = {
    options: Array<string>;
  };
  
  export const DropdownMenu = ({ options }: Options) => {
    return (
      <div className="bg-slate-500 w-full left-0 list-none absolute">
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
  
  