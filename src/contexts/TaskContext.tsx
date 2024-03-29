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
      return 0;
    });
  };
  const deleteTask = (id: number) => {
    tasks.map((task) => {
      if (task.id === id) {
        tasks.splice(tasks.indexOf(task), 1);
        setTasks([...tasks]);
      }
      return 0;
    });
  };
  const updateTask = (
    id: number,
    updatedText: string,
    updatedPriority: string,
  ) => {
    tasks.map((task) => {
      if (task.id === id) {
        task.isComplete = false;
        task.text = updatedText;
        task.priority = updatedPriority;
        task.updated_at = new Date();
        setTasks([...tasks]);
      }
      return 0;
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
      updated_at: new Date(),
    };
    setTasks([...tasks, newTask]);
  };
  return (
    <TaskContext.Provider
      value={{ tasks, setTasks, addTask, checkTask, deleteTask, updateTask }}
    >
      {children}
    </TaskContext.Provider>
  );
};
