import { TaskContext } from "contexts/TaskContext";
import { useContext } from "react";
import { TaskType } from "types/types";

export const Task = (props: TaskType) => {
  const assignPriority = (priority: any) => {
    switch (priority) {
      case "high":
        return "bg-red-900";
        break;
      case "medium":
        return "bg-teal-900";
        break;
      case "low":
        return "bg-yellow-900";
        break;

      default:
        break;
    }
  };
  return (
    <div
      className={`task  m-8 py-4 px-5 inline-flex shadow-inner  bg-slate-800  border-slate-700 border  dark:text-slate-300 rounded-md hover:shadow-lg ${assignPriority(
        props.priority
      )}`}
    >
      <span className="task-icon"> 0 </span>
      <a className={props.isComplete ? "line-through": ""}href="#task">{props.text}</a>
    </div>
  );
};
