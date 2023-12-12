import { useContext, useState } from "react";
import { TaskForm } from "./components/taskform/TaskForm";
import { TaskList } from "./components/tasklist/TaskList";
import { TaskProvider } from "./contexts/TaskContext";
import { Button } from "./components/UI";
import { AppContext } from "./contexts/AppContext";
import { AppContextType } from "./types/types.tasks";
const App: React.FC = () => {
  const {isEditing, setIsEditing}=useContext(AppContext) as AppContextType
  
  return (
    <div className="App">
      <header className="App-header">
        {/* Text for the client */}
        {/* <h1 className="text-2xl text-slate-200"> 
          HEY! Ammar here ! <br></br><br></br>
          If you have a Whatsapp Account<br></br><br></br>
          Kindly Contact me here on Whatsapp: +923185929579<br></br><br></br>
          Also send me email here So we can discuss project there:<br></br><br></br>
          ammarqureshibusiness@gmail.com
        </h1> */}
        <Button onClick={()=> setIsEditing(true)}>Add Task</Button>
        <TaskProvider>
          {isEditing ? <TaskForm type="add" /> : null} 
          <TaskList></TaskList>
        </TaskProvider>
      </header>
    </div>
  );
};

export default App;
