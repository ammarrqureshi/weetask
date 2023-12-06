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
<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8 mr-4">
  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
</svg>
      <a className={task.isComplete ? "line-through" : ""} href="#task">
        {task.text}
      </a>
    </div>
  );
};
