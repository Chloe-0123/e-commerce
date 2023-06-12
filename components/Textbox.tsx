import React from 'react'

type formType= {
    
    name: string
    
    
  }

export const Textbox = ({ name }:formType) => {
  return (
    <div className="tw-w-full tw-mb-16">
    <p className="tw-pb-2">{name}</p>
    <input type="text" className="tw-input tw-input-bordered tw-w-full" name = {name} />
</div>
  )
}

export const Textbox2 = ({ name }:formType) => {
  return (
    <div className="tw-w-full tw-mb-4">
    <p className="tw-pb-2">{name}</p>
    <input type="text" className="tw-input tw-input-bordered " name = {name} />
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
