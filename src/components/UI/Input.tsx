import React, { InputHTMLAttributes } from 'react'

interface InputType extends InputHTMLAttributes<HTMLInputElement>{
label:string;
}
export const Input = ( {className, ...rest}:InputType) => {
  return (
    <><input {...rest} className={`${className} bg-inherit outline-none py-4 px-3 focus:border-slate-500 border-2 border-slate-700 rounded-md text-slate-300 `} type="text" /></>
  )
}
