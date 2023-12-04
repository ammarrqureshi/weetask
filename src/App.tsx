import { Task } from "components/task/Task";
import { Button, Input } from "components/UI";
import { KeyboardEvent, useEffect } from "react";

const App: React.FC = () => {
  const handleKeyDown = (event: any) => {
    switch (event.code) {
      case "ArrowUp":
        
       console.log(" Mario moves up");
        break;
      case "ArrowDown":
        alert(" Mario moves down");
        break;
      case "ArrowLeft":
        alert(" Mario moves left");
        break;
      case "ArrowRight":
        alert(" Mario moves right");
        break;

      default:
        break;
    }
  };

  useEffect(() => {
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
        <div
          id="box"
          style={{ background: "red", width: "10px", height: "10px" }}
        ></div>
        {/* <Button value='hello' >Hello</Button> */}
      </header>
    </div>
  );
};

export default App;
