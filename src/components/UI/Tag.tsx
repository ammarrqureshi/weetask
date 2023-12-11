import React, { ReactNode } from "react";

type TagProps = {
  children: ReactNode;
  color: string;
};

export const Tag: React.FC<TagProps> = ({ children, color }) => {
  return (
    <div
      className={`border  border-${color}-500 rounded-md text-${color}-500 p-1`}
    >
      {children}
    </div>
  );
};
