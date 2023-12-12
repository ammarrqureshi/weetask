import { useContext, useEffect, useState } from "react";
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

  // const [color, setColor] = useState("green");
  // useEffect(() => {
  //   switch (task.priority) {
  //     case "high":
  //       setColor("teal");
  //       break;
  //     case "medium":
  //       setColor("teal");
  //       break;
  //     case "low":
  //       setColor("orange");
  //       break;

  //     default:
  //       setColor("green");
  //   }
  // }, [task.priority]);

  return (
    <div
      className={`task  cursor-pointer m-8 py-4 px-5 flex inline-flex items-center gap-4 justify-between shadow-inner  bg-slate-800  border-slate-700 border  dark:text-slate-300 rounded-md hover:shadow-lg 
      )}`}
    >
      {task.isComplete ? (
        <Icon onClick={taskClickHandler} className="w-6" name="checkIcon" />
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
      <Tag color="red">{task.priority}</Tag>

      <p>{getDate(task.updated_at)}</p>

      <Button Type="primary" onClick={() => deleteTask(task.id)}>Delete</Button>
      <Button Type="secondary" onClick={() => setIsEditing(true)}>Edit</Button>
      {isEditing ? <EditForm taskId={task.id}></EditForm> : null}
    </div>
  );
};
