import { useState } from 'react';

import reactLogo from './assets/react.svg';
import rspackLogo from './assets/rspack.svg';
import './App.css';

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <a href="https://www.rspack.dev/" target="_blank" rel="noreferrer">
        <img src={rspackLogo} className="logo" alt="Rspack logo" />
      </a>
      <a href="https://reactjs.org" target="_blank" rel="noreferrer">
        <img src={reactLogo} className="logo react" alt="React logo" />
      </a>

      <h1>Rspack + React + TypeScript</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Rspack and React logos to learn more
      </p>
    </div>
  );
}

export default App;
