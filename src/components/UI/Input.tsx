import React, { InputHTMLAttributes } from 'react'

interface InputType extends InputHTMLAttributes<HTMLInputElement>{
label:string;
}
export const Input = ( {className, ...rest}:InputType) => {
  return (
    <><input {...rest} className={`${className} w-full bg-slate-850 outline-none py-4 px-3 focus:border-slate-700 border border-slate-800 rounded-xl text-slate-300 `} type="text" autoFocus/></>
  )
}
