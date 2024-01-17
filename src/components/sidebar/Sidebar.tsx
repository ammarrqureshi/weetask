import { useContext } from "react";
import { FormContext } from "../../contexts/FormContext";
import { FormContextType } from "../../types/types.tasks";
import { Button, Icon } from "../UI";
import { AddForm } from "../taskform/AddForm";
import { TaskProvider } from "../../contexts/TaskContext";

export const Sidebar = () => {
  const { isEditing, setIsEditing } = useContext(
    FormContext,
  ) as FormContextType;

  return (
    <div className="border-r p-2 border-slate-500/20 min-w-[250px] ">
      <Button
        className="fixed bottom-8 right-4"
        Type="primary"
        onClick={() => setIsEditing(true)}
      >
        + Add Task
      </Button>
      <Button
        className="text-orange-500 hover:text-slate-300"
        Type=""
        type="button"
        onClick={() => setIsEditing(true)}
      >
        <Icon name="plusCircleIcon" width="4px" height="4px" />
        <p className="">Add Task</p>
      </Button>

      {isEditing ? <AddForm /> : null}
    </div>
  );
};
