import { useContext } from "react";
import { FormContext } from "../../contexts/FormContext";
import { FormContextType } from "../../types/types.tasks";
import { Button } from "../UI";
import { AddForm } from "../taskform/AddForm";
import { TaskProvider } from "../../contexts/TaskContext";

export const Sidebar = () => {
  const { isEditing, setIsEditing } = useContext(
    FormContext,
  ) as FormContextType;

  return (
    <div className="border-r p-2 border-slate-500/20 min-w-[250px] ">
      <Button Type="primary" onClick={() => setIsEditing(true)}>
        Add Task
      </Button>
      {isEditing ? <AddForm /> : null}
    </div>
  );
};
