import { createContext } from "react";
import { TaskType } from "../types/types";
export const TaskContext = createContext<TaskType>({
  text: "task 1",
  status: "pending",
  isComplete: false,
  created_at: new Date(),
  priority: "medium",
 
});
