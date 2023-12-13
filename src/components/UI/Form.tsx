import { FormEvent, useContext, useState } from "react";
import { Input, Button } from "./index";
import { titleCase } from "../../utils";
import { FormContextType } from "../../types/types.tasks";
import { FormContext } from "../../contexts/FormContext";
import { Label } from "./Label";

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
    if (taskValue.value.length > 0 && priorityValue.value.length > 0) {
      console.log("form submitted successfully!");
      onSubmit(taskValue.value, priorityValue.value);

      setIsError(false);
      setIsEditing(false);
    } else {
      console.log("error occured!");
      setIsError(true);
    }
  };

  return (
    <div className="w-screen z-50 flex justify-center items-center backdrop-blur h-screen bg-slate-800/10 fixed top-0 left-0 right-0 bottom-0">
      <form
        className={`m-8 py-6 px-5 flex flex-wrap inline-flex items-center gap-4 justify-between shadow-inner  bg-slate-900  border-slate-800 border  dark:text-slate-300 rounded-md hover:shadow-lg 
      )}`}
        onSubmit={formSubmitHandler}
      >
        <Label>Tasks</Label>
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

        <Label>Priority</Label>
        <select
          className="bg-slate-850 outline-none py-4 px-3 focus:border-slate-700 border-2 border-slate-800 rounded-md text-slate-300  "
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

        <div className="btn-wrapper flex justify-between gap-3 ">
          <Button
            Type="secondary"
            onClick={() => {
              setIsEditing(false);
            }}
          >
            Cancel
          </Button>
          <Button Type="primary" value={type} disabled={!taskValue.value}>
            {titleCase(type)} Task
          </Button>
        </div>
      </form>
    </div>
  );
};
