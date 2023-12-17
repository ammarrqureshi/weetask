import React, { ReactNode } from "react";

type TagProps = {
  children: ReactNode;
  color: string;
  className?: string;
};

export const Tag: React.FC<TagProps> = ({ children, color, className }) => {
  const getColorClass = () => {
    switch (color) {
      case "red":
        return "border-red-400 text-red-400 bg-red-700/20";
      case "teal":
        return "border-teal-400 text-teal-400  bg-teal-700/20";
      case "yellow":
        return "border-yellow-400 text-yellow-400  bg-yellow-700/20";

      default:
        return "border-gray-400 text-gray-400";
    }
  };
  return (
    <div
      className={`border $ ${getColorClass()} min-w-max flex justify-center items-center rounded-full px-2 max-sm:px-1 max-sm:text-xs`}
    >
      {children}
    </div>
  );
};
