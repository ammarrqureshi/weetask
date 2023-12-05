import { TaskType } from "types/types";
export const Tasks: TaskType[] = [
  {
    text: "task no 1",
    status: "progress",
    isComplete: false,
    created_at: new Date(),
    priority: "high",
  },
  {
    text: "task no 2",
    status: "pending",
    isComplete: false,

    created_at: new Date(),
    priority: "low",
  },
  {
    text: "task no 3",
    status: "completed",
    isComplete: true,

    created_at: new Date(),
    priority: "medium",
  },
];
