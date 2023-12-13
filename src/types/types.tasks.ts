import { Dispatch, SetStateAction } from "react";

export type TaskType = {
  id: number;
  sortIndex?:number;
  text: string;
  priority: "high" | "medium" | "low" | string;
  status?: "progress" | "pending" | "completed";
  isComplete: boolean;
  created_at: Date;
  updated_at: Date;
};

export interface TaskContextType {
  tasks: TaskType[];
  setTasks: Dispatch<SetStateAction<TaskType[]>>;
  addTask: (task: TaskType) => void;
  // updateTask: (id: number) => void;
  checkTask: (id: number) => void;
  deleteTask: (id: number) => void;
  updateTask: (
    id: number,
    updatedText: string,
    updatedPriority: string
  ) => void;
}

export interface FormContextType {
  isEditing: boolean;
  setIsEditing: Dispatch<SetStateAction<boolean>>;
}
