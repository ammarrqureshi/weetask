import React, { LabelHTMLAttributes, ReactNode } from "react";

interface LabelType extends LabelHTMLAttributes<HTMLLabelElement> {
  children: ReactNode;
}

export const Label = ({ children, ...rest }: LabelType) => {
  return (
    <label className="text-slate-300 w-full" {...rest}>
      {children}
    </label>
  );
};
