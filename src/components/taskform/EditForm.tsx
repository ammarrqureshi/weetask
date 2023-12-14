import { TaskContext } from "../../contexts/TaskContext";
import { TaskContextType } from "../../types/types.tasks";
import { useFormInput, useFormSelect } from "../../utils";
import { useContext, useEffect } from "react";
import { Form } from "../UI/Form";

type EditFormProps = {
  taskId: number;
};
export const EditForm = ({ taskId }: EditFormProps) => {
  const taskText = useFormInput("");
  const taskPriority = useFormSelect("Not assigned");
  const { updateTask, tasks } = useContext(TaskContext) as TaskContextType;

  useEffect(() => {
    tasks.map((task) => {
      if (task.id === taskId) {
        taskText.setInput(task.text);
        taskPriority.setSelect(task.priority);
      }
      return 0;
    });
  }, []);

  const updateTaskHandler = (taskValue: string, priorityValue: string) => {
    updateTask(taskId, taskValue, priorityValue);
    
  };

  return (
    <Form
      onSubmit={updateTaskHandler}
      type="update"
      taskValue={taskText}
      priorityValue={taskPriority}
    />
  );
};
