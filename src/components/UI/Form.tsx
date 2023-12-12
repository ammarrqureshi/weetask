import { FormEvent, useContext, useState } from "react";
import { Input, Button } from "./index";
import { titleCase } from "../../utils";
import { FormContextType } from "../../types/types.tasks";
import { FormContext } from "../../contexts/FormContext";

type FormProps = {
  onSubmit: (task: string, priority: string) => void;
  type: string;
  [key: string]: any;
};

export const Form = ({
  onSubmit,
  type,
  taskValue,
  priorityValue,
}: FormProps) => {
  const { setIsEditing } = useContext(FormContext) as FormContextType;
  const [isError, setIsError] = useState(false);

  const formSubmitHandler = (e: FormEvent) => {
    e.preventDefault();
    onSubmit(taskValue.value, priorityValue.value);
    if (taskValue.value.length > 0 && priorityValue.value.length > 0) {
      console.log("form submitted successfully!");

      setIsError(false);
      setIsEditing(false);
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
        {...taskValue}
        label="Task Text"
        name="text"
        placeholder="Enter your task"
      />

      <select
        className="bg-slate-900 outline-none py-4 px-3 focus:border-slate-500 border-2 border-slate-700 rounded-md text-slate-300  "
        id="priority"
        name="priority"
        {...priorityValue}
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

      <Button value={type}>{titleCase(type)} Task</Button>
    </form>
  );
};
