import { HtmlHTMLAttributes, MouseEventHandler, ReactNode } from 'react'

type ButtonProps = {
  value: string,
  children: ReactNode,
  onClick: MouseEventHandler,
  className: string
}

export const Button = ( props: ButtonProps ) => {
  return (
    <button onClick={props.onClick} className={props.className}  value={props.value}>{props.children}</button>
  )
}
