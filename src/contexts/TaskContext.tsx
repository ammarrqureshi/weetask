import React, { ReactNode, createContext, useState } from "react";

import { Tasks } from "../data";
import { TaskType, TaskContextType } from "../types/types.tasks";

export const TaskContext = createContext<TaskContextType | null>(null);

export const TaskProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [tasks, setTasks] = useState<TaskType[]>(Tasks);
  const checkTask = (id: number) => {
    tasks.filter((task) => {
      if (task.id === id) {
        if (task.isComplete === true) {
          task.isComplete = false;
          setTasks([...tasks]);
        } else {
          task.isComplete = true;
          setTasks([...tasks]);
        }
      }
    });
  };
  const deleteTask = (id: number) => {
    tasks.filter((task) => {
      if (task.id === id) {
       setTasks([...tasks].splice(indexOf(task),1))
      }
    });
  };
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
    <TaskContext.Provider value={{ tasks, addTask, checkTask, deleteTask }}>
      {children}
    </TaskContext.Provider>
  );
};
function indexOf(task: TaskType): number {
  throw new Error("Function not implemented.");
}

