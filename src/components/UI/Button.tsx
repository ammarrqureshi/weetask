import { ButtonHTMLAttributes, HtmlHTMLAttributes, MouseEventHandler, ReactNode } from 'react'

interface ButtonType extends ButtonHTMLAttributes<HTMLButtonElement>{
children: ReactNode;
}

export const Button = ( {children,...rest}:ButtonType ) => {
  return (
    <button {...rest} >{children}</button>
  )
}
