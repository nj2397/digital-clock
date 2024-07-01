import DClock from "./screen/DClock"
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"s
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}

      <DClock />


    </div>
  );
}

export default App;
