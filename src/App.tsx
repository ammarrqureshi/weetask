import { Task } from 'components/task/Task';
import { Button , Input } from 'components/UI'
import { KeyboardEvent, useEffect } from 'react';

const App: React.FC= () => {
  
  const handleKeyDown = (event: KeyboardEvent) => {
    if (event.code === 'ArrowUp') {
      // do your stuff
      alert('ArrowUp key pressed!');
    }
  };

  useEffect(() => {
    document.addEventListener('keydown', handleKeyDown);

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, []);
  return (
    <div className="App">
      <header className="App-header">
       WEETASK
       <Task/>
       <Input/>
       <button >click to log</button>
       {/* <Button value='hello' >Hello</Button> */}
      </header>
    </div>
  );
}

export default App;
