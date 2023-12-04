import { Task } from "components/task/Task";
import { Button, Input } from "components/UI";
import { KeyboardEvent, useEffect } from "react";

const App: React.FC = () => {
  useEffect(() => {
    const handleKeyDown = (event: any) => {
      if (event.code === "ArrowUp") {
        event.preventDefault();
        alert("ArrowUp key pressed!");
      }
    };

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, []);
  
  return (
    <div className="App">
      <header className="App-header">
        WEETASK
        <Task />
        <Input />
        <button>click to log</button>
        {/* <Button value='hello' >Hello</Button> */}
      </header>
    </div>
  );
};

export default App;
