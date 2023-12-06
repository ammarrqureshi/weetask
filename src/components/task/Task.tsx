import { TaskType } from "../../types/types.tasks";

export const assignPriority = (priority: any,) => {
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
      return "display-none"
      break;
  }
};
export const Task = (task:TaskType, {...rest}) => {

  return (
    <div
      className={`task  m-8 py-4 px-5 inline-flex shadow-inner  bg-slate-800  border-slate-700 border  dark:text-slate-300 rounded-md hover:shadow-lg ${assignPriority(
        task.priority
      )}`}
    >
      <span className="task-icon"> 0 </span>
      <a className={task.isComplete ? "line-through" : ""} href="#task">
        {task.text}
      </a>
    </div>
  );
};
