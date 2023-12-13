import { TaskType } from "./types/types.tasks";
export const Tasks: TaskType[] = [
  {
    id: 0,
    sortIndex:1,
    text: "task no 0",
    status: "progress",
    isComplete: false,
    created_at: new Date(),
    priority: "high",
    updated_at: new Date()
  }, {
    id: 1,
    sortIndex:2,
    text: "task no 1",
    status: "progress",
    isComplete: false,
    created_at: new Date(),
    priority: "high",
    updated_at: new Date()

  },
  {
    id: 2,
    sortIndex:2,
    text: "task no 2",
    status: "pending",
    isComplete: false,
    created_at: new Date(),
    priority: "low",
    updated_at: new Date()

  },
  {
    id: 3,
    sortIndex:2,
    text: "task no 3",
    status: "completed",
    isComplete: true,
    created_at: new Date("2021-03-25"),
    priority: "medium",
    updated_at: new Date("2021-03-25")

  },
  {
    id: 4,
    sortIndex:2,
    text: "task no 2",
    status: "pending",
    isComplete: false,
    created_at: new Date("2022-04-19"),
    priority: "high",
    updated_at:new Date("2022-04-19")
  },
 
];
