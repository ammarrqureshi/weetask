import { Task } from "../task/Task";
import { Tasks } from "../../data";
import { TaskContext } from "../../contexts/TaskContext";

export const TaskList = () => {
  return (
    <div>
      {Tasks.map((task) => (
        <TaskContext.Provider value={task}>
          <Task />
        </TaskContext.Provider>
      ))}
    </div>
  );
};
