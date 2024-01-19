import { TaskList } from "./components/tasklist/TaskList";
import { FormProvider } from "./contexts/FormContext";
import { Container } from "./components/UI/Container";
import { Navbar } from "./components/Navbar";
import { Sidebar } from "./components/sidebar/Sidebar";

import { Button } from "./components/UI";
import { SignIn } from "./components/auth/SignIn";
const App = () => {
  return (
    <div className="App text-slate-200 h-full w-full ">
      <header className="w-full">
        <Navbar></Navbar>
      </header>
      <main className="h-full flex w-full">
        <FormProvider>
          <Sidebar />
        </FormProvider>
        <div className="box-border w-full">
          <Container>
            <SignIn />
            <TaskList></TaskList>
          </Container>
        </div>{" "}
      </main>
    </div>
  );
};

export default App;
