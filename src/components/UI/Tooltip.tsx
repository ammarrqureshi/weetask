import React, { ReactNode } from "react";

type TooltipProps = {
  children: ReactNode;
  className?: string;
};

export const Tooltip = ({ children, className }: TooltipProps) => {
  return (
    <span
      className={`z-[999] hidden bg-slate-800 text-slate-300 rounded-md border border-slate-700 text-xs group-hover:inline-block py-1 px-3  absolute top-full mt-2 left-1/2 transform -translate-x-1/2`}
    >
      {children}
    </span>
  );
};
