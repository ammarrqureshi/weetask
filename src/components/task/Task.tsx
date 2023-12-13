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
      className={`box-content duration-500 w-full py-3 px-5 flex inline-flex items-center gap-4 justify-between shadow-inner  bg-slate-850  border-slate-800 border  dark:text-slate-300 rounded-md hover:shadow-lg hover:bg-slate-900 
      )}`}
    >
      <div
        id="task-check-block"
        className="cursor-pointer max-w-[50%]  self-start flex  justify-start items-start gap-3"
      >
        {task.isComplete ? (
          <Icon
            onClick={taskClickHandler}
            className="w-6 h-6 min-w-min "
            name="checkIcon"
          />
        ) : (
          <Icon
            onClick={taskClickHandler}
            name="circleIcon"
            className="w-6 h-6 min-w-min"
          />
        )}
        <div
          id="task-date-block"
          className="flex gap-2 flex-col overflow-hidden text-ellipsis	justify-start items-start"
        >
          <a
            onClick={taskClickHandler}
            className={`leading-none truncate max-w-[15rem] ${
              task.isComplete ? "line-through " : ""
            }`}
            href="#task"
          >
            {task.text}
          </a>
          <p className="text-xs text-gray-500">{getDate(task.updated_at)}</p>
        </div>
      </div>

      <div id="task-actions-block" className="task-actions  flex gap-3 justify-center items-center ">
        <Tag colorClass={getColor()}>{task.priority}</Tag>

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
