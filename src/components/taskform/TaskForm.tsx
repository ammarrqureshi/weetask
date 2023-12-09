import { TaskContext } from "../../contexts/TaskContext";
import { TaskContextType, TaskType } from "../../types/types.tasks";
import { useFormInput, useFormSelect } from "../../utils/";
import { Button, Input } from "../UI";
import { useState, ChangeEvent, FormEvent, useContext } from "react";

export const TaskForm = () => {
  const taskText = useFormInput("");
  const taskPriority = useFormSelect("Not assigned");

  const [input, setInput] = useState({
    text: "",
    priority: "Not assigned",
  });
  const { addTask } = useContext(TaskContext) as TaskContextType;
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
      addTask(newTask);
      setInput({
        text: "",
        priority: "Not assigned",
      });
      setIsError(false);
    } else {
      console.log("error occured!");
      setIsError(true);
    }
  };

  // const inputChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
  //   e.preventDefault();
  //   const { name, value } = e.target;
  //   console.log(name, value);
  //   setInput((prev) => ({
  //     ...prev,
  //     [name]: value,
  //   }));
  // };
  // const selectChangeHandler = (e: ChangeEvent<HTMLSelectElement>) => {
  //   e.preventDefault();
  //   console.log(e.target.value);
  //   setInput((prev) => ({ ...prev, priority: e.target.value }));
  // };

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
