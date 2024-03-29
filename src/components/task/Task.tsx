import { useContext, DragEventHandler } from "react";
import { FormContextType, TaskType } from "../../types/types.tasks";
import { Button, Tag, Icon, Tooltip, IconWrapper } from "../UI";
import { EditForm } from "../taskform/EditForm";
import { FormContext } from "../../contexts/FormContext";
import { getDate } from "../../utils";

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
  const today = new Date().toDateString();
  const { isEditing, setIsEditing } = useContext(
    FormContext,
  ) as FormContextType;
  const taskClickHandler = () => {
    checkTask(task.id);
  };

  const getColor = () => {
    switch (task.priority) {
      case "high":
        return "red";
      case "medium":
        return "teal";
      case "low":
        return "yellow";

      default:
        return "gray";
    }
  };

  return (
    <div
      className={`${className} box-border  w-full py-3 pl-4 pr-2 flex inline-flex items-center gap-4 justify-between shadow-inner  bg-slate-850  border-slate-800 border   rounded-xl hover:shadow-lg hover:bg-slate-900 
      )}`}
      draggable
      onDragStart={onDragStart}
      onDragOver={onDragOver}
      onDrop={onDrop}
      onDragEnter={onDragEnter}
    >
      <div
        id="task-left-block"
        className="cursor-pointer truncate w-[70%]  flex justify-start items-start gap-3"
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
        )}{" "}
        <div
          id="task-date-block"
          className="flex gap-2 flex-col  	justify-start items-start"
        >
          {" "}
          <a
            onClick={taskClickHandler}
            className={`leading-none group relative ${
              task.isComplete ? "line-through text-gray-400 " : ""
            }`}
            href="#task"
          >
            {" "}
            {task.text}{" "}
          </a>
          <p
            className={`text-xs  ${
              task.updated_at.toDateString() === today
                ? "text-green-500"
                : "opacity-30"
            }`}
          >
            {task.updated_at.toDateString() === today
              ? "Today"
              : getDate(task.updated_at)}
          </p>
        </div>
      </div>

      <div
        id="task-right-block"
        className="flex justify-end items-center gap-3 max-sm:gap-2"
      >
        <Tag className="" color={getColor()}>
          {task.priority}
        </Tag>
        <div
          id="task-actions-block"
          className="task-actions   flex gap-0 justify-end items-center max-sm:gap-0 "
        >
          <Button
            className="group"
            Type="icon"
            onClick={() => setIsEditing(true)}
          >
            <IconWrapper>
              {" "}
              <Tooltip>Edit</Tooltip>
              <Icon className="w-4 h-4" name="pencilIcon" />
            </IconWrapper>
          </Button>

          <Button
            className="group"
            Type="icon"
            onClick={() => deleteTask(task.id)}
          >
            <IconWrapper>
              {" "}
              <Tooltip>Delete</Tooltip>
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
