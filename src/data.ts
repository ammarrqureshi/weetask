import { TaskType } from "./types/types.tasks";
export const Tasks: TaskType[] = [
  {
    id: 0,
    text: "task no 0",
    status: "progress",
    isComplete: false,
    created_at: new Date(),
    priority: "high",
    updated_at: new Date()
  }, {
    id: 1,
    text: "task no 1",
    status: "progress",
    isComplete: false,
    created_at: new Date(),
    priority: "high",
    updated_at: new Date()

  },
  {
    id: 2,
    text: "task no 2",
    status: "pending",
    isComplete: false,
    created_at: new Date(),
    priority: "low",
    updated_at: new Date()

  },
  {
    id: 3,
    text: "task no 3",
    status: "completed",
    isComplete: true,
    created_at: new Date(),
    priority: "medium",
    updated_at: new Date()

  },
  {
    id: 4,
    text: "task no 2",
    status: "pending",
    isComplete: false,
    created_at: new Date(),
    priority: "high",
    updated_at: new Date()
  },
 
];
