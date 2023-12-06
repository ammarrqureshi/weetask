import { Button, Input } from "./components/UI";
import { TaskForm } from "./components/taskform/TaskForm";
import { TaskList } from "./components/tasklist/TaskList";
import { Tasks } from "./data";

const App: React.FC = () => {
  function btnclick() {
    console.log("hello world!");
  }

  const addTask = () => {
    console.log("adding task...");
  };

  return (
    <div className="App">
      <header className="App-header">
        WEETASK
        <TaskForm></TaskForm>
        <TaskList></TaskList>
        <Button
          onClick={addTask}
          className="m-2 rounded-full border-t-2 text-slate-300 border-slate-600 bg-slate-800 px-4 py-2 drop-shadow-xl hover:bg-slate-700"
          value="hello"
        >
          Hello
        </Button>
      </header>
    </div>
  );
};

export default App;
