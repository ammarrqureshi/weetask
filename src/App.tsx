import { TaskForm } from "./components/taskform/TaskForm";
import { TaskList } from "./components/tasklist/TaskList";
import { TaskProvider } from "./contexts/TaskContext";
const App: React.FC = () => {
  return (
    <div className="App">
      <header className="App-header">
        WEETASK
        <TaskProvider>
          <TaskForm />
          <TaskList></TaskList>
        </TaskProvider>
      </header>
    </div>
  );
};

export default App;
