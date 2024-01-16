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
    <div className="App h-full w-full ">
      <header className="w-full">
        <Navbar></Navbar>
      </header>
      <main className="h-full flex w-full">
        <div className="border-r border-slate-500/20 min-w-[250px] ">
          <Button Type="primary" onClick={() => setIsEditing(true)}>
            Add Task
          </Button>
        </div>
        <div className="box-border w-full">
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
