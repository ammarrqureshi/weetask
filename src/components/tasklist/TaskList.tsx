import { Task } from "../task/Task";
import { TaskContext } from "../../contexts/TaskContext";
import { useContext } from "react";
import { TaskContextType } from "../../types/types.tasks";

export const TaskList = () => {
    const { tasks } = useContext(TaskContext) as TaskContextType;
  return (
<div>
    
      {tasks.map((task) => (
          <Task {...task}/>    
      ))} 
    </div>
  );
};
 