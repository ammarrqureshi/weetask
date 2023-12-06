import { TaskContext } from "../../contexts/TaskContext";
import { TaskContextType, TaskType } from "../../types/types.tasks";
import { Button, Input } from "../UI";
import { useState, ChangeEvent, FormEvent, useContext } from "react";

export const TaskForm = () => {
  const [input, setInput] = useState({
    text: "task4",
    priority: "medium",
  });
  const { addTask } = useContext(TaskContext) as TaskContextType;

  

  const formSubmitHandler= (e: FormEvent) => {
    e.preventDefault();

    const newTask :TaskType = {
      id:Math.random(),
      text: input.text,
      status: "pending",
      isComplete: false,
      created_at: new Date(),
      priority: input.priority,
    };
addTask(newTask);
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

  return (
    <form onSubmit={formSubmitHandler}>
      <Input
        onChange={inputChangeHandler}
        label="Task Text"
        name="text"
        placeholder="Enter your task"
      />
      <Input
        onChange={inputChangeHandler}
        label="Task Priority"
        name="priority"
        placeholder="priority"
      />
      <Button value="hello">
        Hello
      </Button>
    </form>
  );
};

