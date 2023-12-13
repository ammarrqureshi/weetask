import { ButtonHTMLAttributes, ReactNode } from "react";

interface ButtonType extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  Type: string;
}

export const Button = ({ children, Type, className, ...rest }: ButtonType) => {
  const getType = () => {
    switch (Type) {
      case "primary":
        return "rose";
      case "secondary":
        return "slate";
      case "danger":
        return "red";

      default:
        break;
    }
  };

  return (
    <button
      className={`${className} rounded-full border-slate-600 bg-${getType()}-800 text-slate-300 px-4 py-2 drop-shadow-xl hover:bg-${getType()}-700 disabled:bg-gray-800 disabled:text-gray-900`}
      {...rest}
    >
      {children}
    </button>
  );
};
