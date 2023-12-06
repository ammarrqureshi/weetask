import React, { InputHTMLAttributes } from 'react'

interface InputType extends InputHTMLAttributes<HTMLInputElement>{
label: string;

}
export const Input = ( {label, ...rest}:InputType) => {
  return (
    <><input {...rest} className='bg-inherit py-4 px-3 border-2 border-slate-700 rounded-md text-slate-300 ' type="text" /></>
  )
}
