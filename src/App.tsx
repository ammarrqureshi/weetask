import { useContext } from "react";
import { AddForm } from "./components/taskform/AddForm";
import { TaskList } from "./components/tasklist/TaskList";
import { TaskProvider } from "./contexts/TaskContext";
import { Button, Icon, IconWrapper, Tooltip } from "./components/UI";
import { FormContextType, ThemeContextType } from "./types/types.tasks";
import { FormContext, FormProvider } from "./contexts/FormContext";
import { ThemeContext } from "./contexts/ThemeContext";
import { Container } from "./components/UI/Container";
import { Navbar } from "./components/Navbar";
import { Sidebar } from "./components/sidebar/Sidebar";

const App = () => {
  return (
    <div className="App h-full w-full ">
      <header className="w-full">
        <Navbar></Navbar>
      </header>
      <main className="h-full flex w-full">
        <FormProvider>
          <Sidebar />
        </FormProvider>
        <div className="box-border w-full">
          <Container>
            <TaskList></TaskList>
          </Container>
        </div>{" "}
      </main>
    </div>
  );
};

export default App;
