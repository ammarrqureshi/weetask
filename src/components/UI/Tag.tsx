import React, { ReactNode } from "react";

type TagProps = {
  children: ReactNode;
 colorClass: string;
 className?: string;
};

export const Tag: React.FC<TagProps> = ({ children,colorClass,className} ) => {
  return (
    <div
      className={`border ${colorClass} ${className} min-w-max flex justify-center items-center rounded-full px-2`}
    >
      {children}
    </div>
  );
};
