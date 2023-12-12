import React, { ReactNode } from "react";

type TagProps = {
  children: ReactNode;
  colorClass:string
};

export const Tag: React.FC<TagProps> = ({ children,colorClass} ) => {
  return (
    <div
      className={`border ${colorClass}  rounded-full px-2`}
    >
      {children}
    </div>
  );
};
