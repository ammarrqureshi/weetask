import { TaskForm } from "./components/taskform/TaskForm";
import { TaskList } from "./components/tasklist/TaskList";
import { TaskProvider } from "./contexts/TaskContext";
const App: React.FC = () => {
  return (
    <div className="App">
      <header className="App-header">
        <h1 className=" text-slate-200">HEY! KINDLY CONTACT ME HERE ON WHATSAPP , WE WILL DISCUSS PROJECT THERE : +923471443011</h1>
        {/* <TaskProvider>
          <TaskForm  />
          <TaskList></TaskList>
        </TaskProvider> */}
      </header>
    </div>
  );
};

export default App;
