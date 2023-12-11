import { TaskContext } from "../../contexts/TaskContext";
import { TaskContextType, TaskType } from "../../types/types.tasks";
import { useFormInput, useFormSelect } from "../../utils/";
import { Button, Input } from "../UI";
import { useState, FormEvent, useContext } from "react";

type FormProps={
  type:string;
  taskId?: number;
}

export const TaskForm = ({type,taskId=0}:FormProps) => {
  const taskText = useFormInput("");
  const taskPriority = useFormSelect("Not assigned");

  const { addTask , updateTask,tasks } = useContext(TaskContext) as TaskContextType;
  const [isError, setIsError] = useState(false);

  const formSubmitHandler = (e: FormEvent) => {
    e.preventDefault();
    if (taskText.value.length > 0 && taskPriority.value.length > 0) {
      const newTask: TaskType = {
        id: Math.random(),
        text: taskText.value,
        status: "pending",
        isComplete: false,
        created_at: new Date(),
        priority: taskPriority.value,
      };
      if(type==="add"){
        addTask(newTask);
        
      }
      if(type==="edit"){
        
        updateTask(taskId);
      }


   

      taskText.setInput("");
      taskPriority.setSelect("Not assigned");

      setIsError(false);
    } else {
      console.log("error occured!");
      setIsError(true);
    }
  };

  return (
    <form onSubmit={formSubmitHandler}>
      <Input
        className={
          isError
            ? "!border-rose-500 focus:!border-rose-500 placeholder:text-rose-500"
            : ""
        }
        {...taskText}
        label="Task Text"
        name="text"
        placeholder="Enter your task"
      />

      <select
        className="bg-slate-900 outline-none py-4 px-3 focus:border-slate-500 border-2 border-slate-700 rounded-md text-slate-300  "
        id="priority"
        name="priority"
        {...taskPriority}
      >
        <option value="Not assigned" key="Not assigned">
          Not Assigned
        </option>
        <option value="high" key="high">
          High
        </option>
        <option value="medium" key="medium">
          Medium
        </option>
        <option value="low" key="low">
          Low
        </option>
      </select>

      <Button value="add">Add</Button>
    </form>
  );
};
