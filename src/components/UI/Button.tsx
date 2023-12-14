import { ButtonHTMLAttributes, ReactNode } from "react";

interface ButtonType extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  Type: string;
}

export const Button = ({ children, Type, className, ...rest }: ButtonType) => {
  const getType = () => {
    switch (Type) {
      case "primary":
        return "orange";
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
      className={`${className}  border-slate-600   ${
        Type === "icon"
          ? `p-1 hover:bg-orange-700 rounded-lg max-sm:p-0`
          : `px-4 py-2 rounded-full text-slate-100 ${getType()} bg-${getType()}-600 hover:bg-${getType()}-500`
      } drop-shadow-xl  disabled:bg-gray-800 disabled:text-gray-900`}
      {...rest}
    >
      {children}
    </button>
  );
};
