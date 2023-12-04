import { Task } from 'components/task/Task';
import { Button , Input } from 'components/UI'

function App() {
  return (
    <div className="App">
      <header className="App-header">
       WEETASK
       <Task/>
       <Input placeholder="placeholder here"/>
       <Button value='hello' >Hello</Button>
      </header>
    </div>
  );
}

export default App;
