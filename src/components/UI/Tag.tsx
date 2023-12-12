import React, { ReactNode } from "react";

type TagProps = {
  children: ReactNode;
  className:string
};

export const Tag: React.FC<TagProps> = ({ children, className} ) => {
  return (
    <div
      className={`border ${className}  rounded-full px-2`}
    >
      {children}
    </div>
  );
};
