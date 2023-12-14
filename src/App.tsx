import { useContext,useState } from "react";
import { AddForm } from "./components/taskform/AddForm";
import { TaskList } from "./components/tasklist/TaskList";
import { TaskProvider } from "./contexts/TaskContext";
import { Button , Icon, IconWrapper, Tooltip} from "./components/UI";
import {  FormContextType } from "./types/types.tasks";
import { FormContext } from "./contexts/FormContext";
const App = () => {
  const { isEditing, setIsEditing } = useContext(FormContext) as FormContextType;
  const [theme, setTheme] = useState("Dark")

  return (
    <div className="App max-w-screen">
      <header className="App-header">
        {/* Text for the client */}
        {/* <h1 className="text-2xl text-slate-200"> 
          HEY! Ammar here ! <br></br><br></br>
          If you have a Whatsapp Account<br></br><br></br>
          Kindly Contact me here on Whatsapp: +923185929579<br></br><br></br>
          Also send me email here So we can discuss project there:<br></br><br></br>
          ammarqureshibusiness@gmail.com
        </h1> */}
          <Button
            className="group"
            Type="icon"
            onClick={() => console.log("hellow")}
          >
            <IconWrapper>
             <Tooltip>{theme}</Tooltip>
             
              <Icon className="w-6 h-6" name="deleteIcon" />
            </IconWrapper>{" "}
          </Button>
        <Button Type="primary" onClick={() => setIsEditing(true)}>Add Task</Button>
        <TaskProvider>
                 {isEditing ? <AddForm />: null}

          <TaskList></TaskList>
        </TaskProvider>
      </header>
    </div>
  );
};

export default App;
