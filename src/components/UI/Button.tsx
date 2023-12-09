import { ButtonHTMLAttributes, ReactNode } from "react";

interface ButtonType extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
}

export const Button = ({ children, ...rest }: ButtonType) => {
  return <button className="m-2 rounded-full text-slate-300 border-slate-600 bg-slate-800 px-4 py-2 drop-shadow-xl hover:bg-slate-700" {...rest}>{children}</button>;
};
