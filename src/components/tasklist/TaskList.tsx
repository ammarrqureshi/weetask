import { Task } from "../task/Task";
import { TaskContext } from "../../contexts/TaskContext";
import { useContext } from "react";
import { TaskContextType } from "../../types/types.tasks";

import { FormProvider } from "../../contexts/FormContext";
export const TaskList = () => {
    const { tasks, checkTask, deleteTask } = useContext(TaskContext) as TaskContextType;
  return (
<div className="max-w-lg flex flex-col gap-4 justify-center items-center flex-wrap ">
    
      {tasks.map((task) => (
        <FormProvider>   <Task key={task.id} task={task} checkTask={checkTask} deleteTask={deleteTask} {...task}/>   </FormProvider>  
      ))} 
    </div>
  );
};
 