import { useContext } from "react";
import { AddForm } from "./components/taskform/AddForm";
import { TaskList } from "./components/tasklist/TaskList";
import { TaskProvider } from "./contexts/TaskContext";
import { Button, Icon, IconWrapper, Tooltip } from "./components/UI";
import { FormContextType, ThemeContextType } from "./types/types.tasks";
import { FormContext } from "./contexts/FormContext";
import { ThemeContext } from "./contexts/ThemeContext";
import { Container } from "./components/UI/Container";
import { Navbar } from "./components/Navbar";

const App = () => {
  const { isEditing, setIsEditing } = useContext(
    FormContext,
  ) as FormContextType;
  return (
    <div className="App h-screen bg-slate-900 w-screen text-slate-100">
      <header className="w-full">
        <Navbar></Navbar>
      </header>
      <main className="flex w-full">
        <div className="bg-green-500 min-w-50 ">
          <Button Type="primary" onClick={() => setIsEditing(true)}>
            Add Task
          </Button>
        </div>
        <div className="bg-sky-500 px-4 w-full">
          <Container>
            <TaskProvider>
              {isEditing ? <AddForm /> : null}

              <TaskList></TaskList>
            </TaskProvider>
          </Container>
        </div>{" "}
      </main>
    </div>
  );
};

export default App;
