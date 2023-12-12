import { TaskContext } from "../../contexts/TaskContext";
import { TaskContextType, TaskType } from "../../types/types.tasks";
import { useFormInput, useFormSelect } from "../../utils";

import { useContext } from "react";
import { Form } from "../UI/Form";

export const AddForm = () => {
  const taskText = useFormInput("");
  const taskPriority = useFormSelect("Not assigned");
  const { addTask } = useContext(TaskContext) as TaskContextType;

  const addTaskHandler = (taskValue: string, priorityValue: string) => {
    const newTask: TaskType = {
      id: Math.random(),
      text: taskValue,
      status: "pending",
      isComplete: false,
      created_at: new Date(),
      priority: priorityValue,
      updated_at: new Date()
    };
    addTask(newTask);
  };

  return <Form onSubmit={addTaskHandler} type="add" taskValue={taskText} priorityValue={taskPriority} />;
};
