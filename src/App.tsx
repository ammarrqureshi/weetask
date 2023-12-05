import { Task } from "components/task/Task";
import { Button, Input } from "components/UI";
import { Tasks } from "data";

const App: React.FC = () => {
  function btnclick() {
    console.log("hello world!");
  }

  return (
    <div className="App">
      <header className="App-header">
        WEETASK
        <Input />
        {Tasks.map((task) => (
          <Task   isComplete={task.isComplete} created_at={new Date()} text={task.text + task.status} priority={task.priority} />
        ))}

        <Button
          onClick={btnclick}
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
