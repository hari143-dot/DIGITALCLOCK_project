import { render } from '@testing-library/react';
import React, { useState } from 'react';

/*function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}*/
function App () {
  let newTime = new Date().toLocaleTimeString();

  const [ctime, setCtime] = useState(newTime);

  const UpdateTime = () => {
      newTime = new Date().toLocaleTimeString();
      setCtime(newTime);
  };

  setInterval(UpdateTime, 1000);

  return (
      <h1>{ctime}</h1>
  );
}
export default App;
