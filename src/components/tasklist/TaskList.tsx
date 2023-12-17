import { Task } from "../task/Task";
import { TaskContext } from "../../contexts/TaskContext";
import { useContext, useState } from "react";
import { TaskContextType } from "../../types/types.tasks";
import { DragEvent } from "react";

import { FormProvider } from "../../contexts/FormContext";
import { Button } from "../UI";
import { Accordion } from "../UI/Accordion";
export const TaskList = () => {
  const [dragItemIndex, setDragItemIndex] = useState<number>(0);
  const [dragOverItemIndex, setDragOverItemIndex] = useState<number>(0);

  const handleDragStart = (event: DragEvent<HTMLDivElement>, index: number) => {
    console.log(index);
    setDragItemIndex(index);
  };
  const handleDragOver = (ev: DragEvent<HTMLDivElement>) => {
    ev.preventDefault();
  };
  const handleDrop = (index: number) => {
    console.log(index);
    const _tasks = [...tasks];
    const [dragItem] = _tasks.splice(dragItemIndex, 1);
    _tasks.splice(dragOverItemIndex, 0, dragItem);
    setTasks(_tasks);
  };

  const handleDragEnter = (index: number) => {
    console.log(index);
    setDragOverItemIndex(index);
  };

  const { tasks, setTasks, checkTask, deleteTask } = useContext(
    TaskContext
  ) as TaskContextType;

  const tasksLeft =
    tasks.length - tasks.filter((task) => task.isComplete == true).length;

  return (
    <div className="box-border overflow-hidden max-w-lg relative flex flex-col gap-4 justify-center items-center flex-wrap py-4 pb-8 border-t border-slate-800">
      <div className="relative w-full mt-4 pb-8 flex flex-col gap-4 justify-center items-center flex-wrap">
      {tasksLeft > 0 ? (
        <>
          {tasks.map((task, index) => {
            if (task.isComplete === false) {
              return (
                <FormProvider>
                  {" "}
                  <Task
                    className=" bg-orange-500"
                    onDragStart={(e) => handleDragStart(e, index)}
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
              );
            }
          })}

          <div
            id="tasks-count"
            className="text-xs opacity-30 absolute bottom-0 left-0  px-4 mt-4"
          >
            {" "}
            {tasksLeft} tasks left
          </div>
        </>
      ) : (
        <div
          id="list-empty-state"
          className="text-xs opacity-30 absolute bottom-0 left-0  px-4 mt-4"
        >
          Hurrah! All Finished!!!
        </div>
      )}
      </div>
<Accordion className="w-full opacity-40 text-xs" title="Completed Tasks">
      <div id="completed-tasks" className="  flex flex-col gap-4 justify-center items-center flex-wrap border-t border-slate-800 bg-inherit w-full pt-4 opacity-30">
      {tasks.map((task, index) => {
            if (task.isComplete === true) {
              return (
                <FormProvider>
                  {" "}
                  <Task
                    className=" bg-orange-500"
                    onDragStart={(e) => handleDragStart(e, index)}
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
              );
            }
          })}


      </div></Accordion>
    </div>
  );
};
