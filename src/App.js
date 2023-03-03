import logo from './logo.svg';
import './App.css';

let name = "Hello World";
function App() {
  return (
    <div className="App">
      <header className="App-header">
      <h2 className='heading'>Hello User</h2>
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and {name} to reload.
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
}

export default App;
