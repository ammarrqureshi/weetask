import React, { ReactNode, createContext, useState } from "react";

import { Tasks } from "../data";
import { TaskType, TaskContextType } from "../types/types.tasks";

export const TaskContext = createContext<TaskContextType | null>(null);

export const TaskProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [tasks, setTasks] = useState<TaskType[]>(Tasks);

  const addTask = (task: TaskType) => {
    const newTask: TaskType = {
      id: task.id,
      text: task.text,
      status: task.status,
      isComplete: false,
      created_at: new Date(),
      priority: task.priority,
    };
    setTasks([...tasks, newTask]);
  };
  return (
    <TaskContext.Provider value={{ tasks, addTask }}>
      {children}
    </TaskContext.Provider>
  );
};
