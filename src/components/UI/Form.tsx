import React, { FormEventHandler, useState } from "react";
import { Input, Button } from "./index";
import { useFormInput, useFormSelect, titleCase } from "../../utils";
type FormProps = {
//   onSubmit: () => void;
  type: string;
  //   isError: boolean;
};

export const Form = ({ type }: FormProps) => {
  const taskText = useFormInput("");
  const taskPriority = useFormSelect("Not assigned");
  const [isError, setIsError] = useState(false);

  const formSubmitHandler = (e: FormEventHandler<HTMLFormElement>) => {
    e.preventDefault();

    if (taskText.value.length > 0 && taskPriority.value.length > 0) {
      console.log("form submitted successfully!");

      setIsError(false);
    
      taskText.setInput("");
      taskPriority.setSelect("Not assigned");
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

      <Button value={type}>{titleCase(type)} Task</Button>
    </form>
  );
};
