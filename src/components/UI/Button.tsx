import { ButtonHTMLAttributes, ReactNode, useState } from "react";

interface ButtonType extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  Type: string;
}

export const Button = ({ children, Type, className, ...rest }: ButtonType) => {
  const isError= true;

  const getType = () => {
    
    switch (Type) {
      case "primary":
        return "bg-rose-800   text-slate-300 disabled:";
      case "secondary":
        return "bg-slate-800   text-slate-300 ";
        case "danger":
          return "bg-red-800   text-slate-300 ";
        case "disabled":
          return "bg-gray-800   text-gray-700 ";

      default:
        break;
    }
  };

  return (
    <button
      className={`${className} m-2 rounded-full border-slate-600 ${getType()} px-4 py-2 drop-shadow-xl hover:bg-slate-700 disabled:bg-gray-800 disabled:text-gray-900`}
      {...rest}
      
    >
      {children}
    </button>
  );
};
