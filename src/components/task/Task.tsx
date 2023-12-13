import { useContext, DragEventHandler } from "react";
import { FormContextType, TaskType } from "../../types/types.tasks";
import { Button } from "../UI";
import Icon from "../UI/Icon";
import { Tag } from "../UI/Tag";
import { EditForm } from "../taskform/EditForm";
import { FormContext } from "../../contexts/FormContext";
import { getDate } from "../../utils";
import { IconWrapper } from "../UI/IconWrapper";

interface taskProps {
  task: TaskType;
  checkTask: (id: number) => void;
  deleteTask: (id: number) => void;
  onDragStart: DragEventHandler<HTMLDivElement>;
  onDragOver: DragEventHandler<HTMLDivElement>;
  onDragEnter: DragEventHandler<HTMLDivElement>;
  onDrop: DragEventHandler<HTMLDivElement>;

  className?: string;
}
export const Task: React.FC<taskProps> = ({
  task,
  checkTask,
  deleteTask,
  onDragStart,
  onDragOver,
  onDragEnter,
  onDrop,
  className,
}) => {
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
      className={`${className} box-content duration-500 w-full py-3 px-5 flex inline-flex items-center gap-4 justify-between shadow-inner  bg-slate-850  border-slate-800 border  dark:text-slate-300 rounded-xl hover:shadow-lg hover:bg-slate-900 
      )}`}
      draggable
      onDragStart={onDragStart}
      onDragOver={onDragOver}
      onDrop={onDrop}
      onDragEnter={onDragEnter}
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

      <div
        id="task-right-block"
        className="flex justify-center items-center gap-6"
      >
        <Tag className="" colorClass={getColor()}>
          {task.priority}
        </Tag>
        <div
          id="task-actions-block"
          className="task-actions  flex gap-2 justify-center items-center "
        >
          <Button Type="icon" onClick={() => setIsEditing(true)}>
            <IconWrapper>
              {" "}
              <Icon className="w-4 h-4" name="pencilIcon" />
            </IconWrapper>
          </Button>

          <Button Type="icon" onClick={() => deleteTask(task.id)}>
            <IconWrapper>
              {" "}
              <Icon className="w-4 h-4" name="deleteIcon" />
            </IconWrapper>{" "}
          </Button>
          <IconWrapper>
            {" "}
            <Icon className="cursor-move w-5 h-5" name="gripIcon" />
          </IconWrapper>
        </div>
      </div>

      {isEditing ? <EditForm taskId={task.id}></EditForm> : null}
    </div>
  );
};
