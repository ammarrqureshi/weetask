export type TaskType = {
  id: number;
  text: string;
  priority?: "high" | "medium" | "low" | string | undefined;
  status?: "progress" | "pending" | "completed";
  isComplete: boolean;
  created_at: Date;
};

export interface TaskContextType {
  tasks: TaskType[];
  addTask: (task: TaskType) => void;
  // updateTask: (id: number) => void;
}
