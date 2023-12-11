import React from "react";

export const Tag = ({priority}: any) => {
  const priorityColor = (priority: any) => {
    switch (priority) {
      case "high":
        return "red";
      case "medium":
        return "green";
      case "low":
        return "yellow";

      default:
        return "gray";
    }
  };

  return (
    <div
      className={`border-2 border-${priorityColor(
        priority
      )}-500 rounded-full p-2 text-slate-300`}
    >
      {priority}
    </div>
  );
};
