import { useEffect, useState } from "react";
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
  const [color, setColor] = useState("");

  useEffect(() => {
    // switch (task.priority) {
    //   case "high":
    //     setColor("red");
    //     break;
    //   case "medium":
    //     setColor("teal");
    //     break;
    //   case "low":
    //     setColor("yellow");
    //     break;

    //   default:
    //     return;
    // }
    if(task.priority==="high"){
      setColor("red");
    }
    if(task.priority==="low"){
      setColor("teal");
    }
    if(task.priority==="medium"){
      setColor("yellow");
    }
  }, [task.priority,color]);

  return (
    <div
      onClick={taskClickHandler}
      className={`task  cursor-pointer m-8 py-4 px-5 flex inline-flex items-center gap-4 justify-between shadow-inner  bg-slate-800  border-slate-700 border  dark:text-slate-300 rounded-md hover:shadow-lg 
      )}`}
    >
      <Tag text={task.priority} color={color}></Tag>
      {task.isComplete ? (
        <Icon className="w-6" name="checkIcon" />
      ) : (
        <Icon name="circleIcon" className="w-6" />
      )}
      <a className={task.isComplete ? "line-through" : ""} href="#task">
        {task.text}
      </a>
      <Button onClick={() => deleteTask(task.id)}>Delete</Button>
      <Button onClick={() => deleteTask(task.id)}>Edit</Button>

    </div>
  );
};
