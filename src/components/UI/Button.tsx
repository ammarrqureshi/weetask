import { ButtonHTMLAttributes, ReactNode, useState } from "react";

interface ButtonType extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  Type: string;
}

export const Button = ({ children, Type, className, ...rest }: ButtonType) => {
  const [color, setColor] = useState("");

  const getType = () => {
    let color = "";

    switch (Type) {
      case "primary":
        color = "bg-rose";
        break;
      case "secondary":
        color = "bg-rose";
        break;

      default:
        break;
    }
    return color;
  };

  return (
    <button
      className={`${className} m-2 rounded-full text-slate-300 border-slate-600 ${getType()}-800 px-4 py-2 drop-shadow-xl hover:`}
      {...rest}
    >
      {children}
    </button>
  );
};
