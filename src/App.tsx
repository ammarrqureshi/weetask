import { useContext, useState } from "react";
import { AddForm } from "./components/taskform/AddForm";
import { TaskList } from "./components/tasklist/TaskList";
import { TaskProvider } from "./contexts/TaskContext";
import { Button, Icon, IconWrapper, Tooltip } from "./components/UI";
import { FormContextType, ThemeContextType } from "./types/types.tasks";
import { FormContext } from "./contexts/FormContext";
import { ThemeContext } from "./contexts/ThemeContext";
const App = () => {
  const { isEditing, setIsEditing } = useContext(
    FormContext
  ) as FormContextType;
  const { theme, changeTheme } = useContext(ThemeContext) as ThemeContextType;
  return (
    <div className="App h-screen bg-slate-900 w-screen text-slate-100">
      <header className="App-header">
        {/* Text for the client */} 
        <h1 className="text-2xl text-slate-200"> 
          HEY! Ammar here ! <br></br><br></br>
          If you have a Whatsapp Account<br></br><br></br>
          Kindly Contact me here on Whatsapp: +923185929579<br></br><br></br>
          Also send me email here So we can discuss project there:<br></br><br></br>
          ammarqureshibusiness@gmail.com
        </h1> 
        {/* <Button
          className="group fixed top-0 right-0"
          Type="icon"
          onClick={() => changeTheme()}
        >
          <IconWrapper>
            <Tooltip>{theme}</Tooltip>
            {theme === "Dark" ? (
              <Icon className="w-6 h-6" name="darkIcon" />
            ) : (
              <Icon className="w-6 h-6" name="lightIcon" />
            )}
          </IconWrapper>{" "}
        </Button>
        <Button Type="primary" onClick={() => setIsEditing(true)}>
          Add Task
        </Button>
        <TaskProvider>
          {isEditing ? <AddForm /> : null}

          <TaskList></TaskList> */}
        {/* </TaskProvider> */}
      </header>
    </div>
  );
};

export default App;
