import { Task } from 'components/task/Task';
import { Button , Input } from 'components/UI'
import { SyntheticEvent } from 'react';

function App() {
  const handleKeyDown = (event: React.KeyboardEvent) => {
    if (event.code === 'ArrowUp') {
      // do your stuff
      console.log('ArrowUp key pressed!');
    }
  };
  return (
    <div className="App">
      <header className="App-header">
       WEETASK
       <Task/>
       <Input placeholder="placeholder here"/>
       <button onKeyDown={handleKeyDown}>click to log</button>
       {/* <Button value='hello' >Hello</Button> */}
      </header>
    </div>
  );
}

export default App;
