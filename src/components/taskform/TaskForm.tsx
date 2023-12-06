import { TaskContext } from "../../contexts/TaskContext";
import { TaskContextType, TaskType } from "../../types/types.tasks";
import { Button, Input } from "../UI";
import { useState, ChangeEvent, FormEvent, useContext } from "react";

export const TaskForm = () => {
  const [input, setInput] = useState({
    text: "",
    priority: "Not assigned",
  });
  const { addTask } = useContext(TaskContext) as TaskContextType;
  const [isError, setIsError] = useState(false);

  const formSubmitHandler = (e: FormEvent) => {
    e.preventDefault();
    if (input.text.length > 0 && input.priority.length > 0) {
      const newTask: TaskType = {
        id: Math.random(),
        text: input.text,
        status: "pending",
        isComplete: false,
        created_at: new Date(),
        priority: input.priority,
      };
      addTask(newTask);
      setInput({
        text: "",
        priority: "Not assigned",
      });
      setIsError(false);
    } else {
      console.log("error occured!")
      setIsError(true);
    }
  };

  const inputChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    const { name, value } = e.target;
    console.log(name, value);
    setInput((prev) => ({
      ...prev,
      [name]: value,
    }));
  };
  const selectChangeHandler = (e: ChangeEvent<HTMLSelectElement>) => {
    e.preventDefault();
    console.log(e.target.value);
    setInput((prev) => ({ ...prev, priority: e.target.value }));

  };

  return (
    <form onSubmit={formSubmitHandler}>
      <Input
      style= {isError ? {borderColor: "red"}: {borderColor: ""}}
        onChange={inputChangeHandler}
        label="Task Text"
        name="text"
        placeholder="Enter your task"
        value={input.text}
      />

      <select className="bg-slate-900 outline-none py-4 px-3 focus:border-slate-500 border-2 border-slate-700 rounded-md text-slate-300  " id="priority" value={input.priority} name="priority" onChange={selectChangeHandler}>
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
