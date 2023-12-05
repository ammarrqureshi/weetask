import { createContext } from "react";
import { TaskType } from "types/types";
export const TaskContext = createContext<TaskType>({
  text: "task 1",
  status: "pending",
  isComplete: false,
  created_at: new Date(),
  priority: "medium",
 
});

export  const assignPriority = (priority: any) => {
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
  }
