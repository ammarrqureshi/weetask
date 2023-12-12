import { AppContext } from "../../contexts/AppContext";
import { TaskContext } from "../../contexts/TaskContext";
import {
  AppContextType,
  TaskContextType,
  TaskType,
} from "../../types/types.tasks";
import { useFormInput, useFormSelect, titleCase } from "../../utils/";
import { Button, Input } from "../UI";
import { useState, FormEvent, useContext, useEffect } from "react";
import { Form } from "../UI/Form";

type FormProps = {
  type: string;
  taskId?: number;
};

export const TaskForm = ({ type, taskId = Math.random() }: FormProps) => {
  const taskText = useFormInput("");
  const taskPriority = useFormSelect("Not assigned");
  const { addTask, updateTask, tasks } = useContext(
    TaskContext
  ) as TaskContextType;
  const { isEditing, setIsEditing } = useContext(AppContext) as AppContextType;
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    if (type === "update") {
      tasks.map((task) => {
        if (task.id === taskId) {
          taskText.setInput(task.text);
          taskPriority.setSelect(task.priority);
        }
      });
    }
  }, [type]);

  // const addTaskHandler = () => {
  //   const newTask: TaskType = {
  //     id: Math.random(),
  //     text: taskText.value,
  //     status: "pending",
  //     isComplete: false,
  //     created_at: new Date(),
  //     priority: taskPriority.value,
  //   };
  //   addTask(newTask);

  const addTaskHandler = ()=>{
    console.log("hello world")
  }

    // if (taskText.value.length > 0 && taskPriority.value.length > 0) {
    
    //   if (type === "add") {
    //   }
    //   if (type === "update") {
    //     updateTask(taskId, taskText.value, taskPriority.value);
    //     console.log(isEditing);
    //   }


    // } else {
    //   console.log("error occured!");
    //   setIsError(true);
    // }
  // };

  return <Form  type={type} />;
};
