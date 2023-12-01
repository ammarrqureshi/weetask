import { Note } from 'components/note/Note';
import { Button , Input } from 'components/UI'

function App() {
  return (
    <div className="App">
      <header className="App-header">
       WEETASK
       <Note/>
       <Input placeholder="placeholder here"/>
       <Button onClick={console.log("hello")}>Hello</Button>
      </header>
    </div>
  );
}

export default App;
