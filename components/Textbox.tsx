import React from 'react'
import { ChangeEventHandler } from 'react';

type formType= {
    
    name: string,
    desc?: string,
    type?: string,
    onChange?: ChangeEventHandler<HTMLInputElement>
    value?: string,
    
  }

export const Textbox = ({ name }:formType) => {
  return (
    <div className="tw-w-full tw-mb-16">
    <p className="tw-pb-2 tw-text-[1.3rem]">{name}</p>
    <input type="text" className="tw-input tw-input-bordered tw-w-full tw-text-[1.3rem]" name = {name} />
</div>
  )
}

export const Textbox2 = ({ name , type, desc, onChange }:formType) => {
  return ( 
    <div className="tw-w-full tw-mb-4">
    <p className="tw-pb-2">{desc}</p>
    <input type={type} className="tw-input tw-input-bordered " name={name} onChange={onChange}/>
</div>
  )
}
export const Textbox3 = ({ name }:formType) => {
  return (
    <div className=" tw-mb-4">
    <p className="tw-pb-2">{name}</p>
    <input type="text" className="tw-input tw-input-bordered " name = {name} />
</div>
  )
}
