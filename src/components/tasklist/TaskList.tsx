import { Task } from "../task/Task";
import { TaskContext } from "../../contexts/TaskContext";
import { useContext, useState } from "react";
import { TaskContextType } from "../../types/types.tasks";
import { DragEvent } from "react";

import { FormProvider } from "../../contexts/FormContext";
export const TaskList = () => {
  const [dragItemIndex, setDragItemIndex] = useState<number>(0);
  const [dragOverItemIndex, setDragOverItemIndex] = useState<number>(0);

  const handleDragStart = (event:DragEvent<HTMLDivElement>, index: number) => {
    console.log(index);
    setDragItemIndex(index);
  };
  const handleDragOver = (ev:DragEvent<HTMLDivElement>) => {
    ev.preventDefault();
  }
  const handleDrop = (index: number) => {
    console.log(index)
    const _tasks = [...tasks];
    const [dragItem]= _tasks.splice(dragItemIndex , 1);
    _tasks.splice(dragOverItemIndex , 0, dragItem);
    setTasks(_tasks);
  };

  const handleDragEnter = (index: number) => {
    console.log(index)
    setDragOverItemIndex(index);
   
  };

 
  const { tasks, setTasks, checkTask, deleteTask } = useContext(
    TaskContext
  ) as TaskContextType;
  return (
    <div className="box-content max-w-xl flex flex-col gap-4 justify-center items-center flex-wrap py-4 border-t border-slate-700">
      {tasks.map((task, index) => (
        <FormProvider>
          {" "}
          <Task
          className=" bg-orange-500"
            onDragStart={(e) => handleDragStart(e,index)}
            onDragOver={handleDragOver}
            onDrop={() => handleDrop(index)}
            onDragEnter={() => handleDragEnter(index)}
          
            key={index}
            task={task}
            checkTask={checkTask}
            deleteTask={deleteTask}
            {...task}
          />{" "}
        </FormProvider>
      ))}
    </div>
  );
};
