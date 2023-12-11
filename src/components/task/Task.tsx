import { useState } from "react";
import { TaskType } from "../../types/types.tasks";
import { Button } from "../UI";
import Icon from "../UI/Icon";
import { Tag } from "../UI/Tag";

type taskProps = {
  task: TaskType;
  checkTask: (id: number) => void;
  deleteTask: (id: number) => void;
};
export const Task: React.FC<taskProps> = (
  { task, checkTask, deleteTask },
  { ...rest }
) => {
  const [isEditing, setIsEditing] = useState(false);
  const taskClickHandler = () => {
    checkTask(task.id);
  };

  return (
    <div
      onClick={taskClickHandler}
      className={`task  cursor-pointer m-8 py-4 px-5 inline-flex shadow-inner  bg-slate-800  border-slate-700 border  dark:text-slate-300 rounded-md hover:shadow-lg 
      )}`}
    >
      <Tag priority={task.priority}></Tag>
      {task.isComplete ? (
        <Icon className="w-6" name="checkIcon" />
      ) : (
        <Icon name="circleIcon" className="w-6" />
      )}
      <a className={task.isComplete ? "line-through" : ""} href="#task">
        {task.text}
      </a>
      <Button onClick={() => deleteTask(task.id)}>Delete</Button>
    </div>
  );
};
