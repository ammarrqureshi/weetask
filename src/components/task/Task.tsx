import { useContext } from "react";
import { FormContextType, TaskType } from "../../types/types.tasks";
import { Button } from "../UI";
import Icon from "../UI/Icon";
import { Tag } from "../UI/Tag";
import { EditForm } from "../taskform/EditForm";
import { FormContext } from "../../contexts/FormContext";
import { getDate } from "../../utils";

type taskProps = {
  task: TaskType;
  checkTask: (id: number) => void;
  deleteTask: (id: number) => void;
};
export const Task: React.FC<taskProps> = (
  { task, checkTask, deleteTask },
  { ...rest }
) => {
  const { isEditing, setIsEditing } = useContext(
    FormContext
  ) as FormContextType;
  const taskClickHandler = () => {
    checkTask(task.id);
  };
  const getColor = () => {
    switch (task.priority) {
      case "high":
        return "border-red-400 text-red-400 bg-red-700/20";
      case "medium":
        return "border-teal-400 text-teal-400  bg-teal-700/20";
      case "low":
        return "border-yellow-400 text-yellow-400  bg-yellow-700/20";

      default:
        return "border-gray-400 text-gray-400";
    }
  };

  return (
    <div
      className={` duration-500 w-full py-1 px-5 flex inline-flex items-center gap-4 justify-between shadow-inner  bg-slate-800  border-slate-700 border  dark:text-slate-300 rounded-md hover:shadow-lg 
      )}`}
    >
      <div className="cursor-pointer flex justify-start items-center gap-3">
        {task.isComplete ? (
          <Icon onClick={taskClickHandler} className="w-6 " name="checkIcon" />
        ) : (
          <Icon onClick={taskClickHandler} name="circleIcon" className="w-6" />
        )}
        <a
          onClick={taskClickHandler}
          className={task.isComplete ? "line-through" : ""}
          href="#task"
        >
          {task.text}
        </a>
      </div>

      <Tag colorClass={getColor()}>{task.priority}</Tag>

    

      <div className="task-actions flex justify-center items-center ">
      <p>{getDate(task.updated_at)}</p>
        <Button Type="danger" onClick={() => deleteTask(task.id)}>
          Delete
        </Button>
        <Button Type="secondary" onClick={() => setIsEditing(true)}>
          Edit
        </Button>
      </div>

      {isEditing ? <EditForm taskId={task.id}></EditForm> : null}
    </div>
  );
};
