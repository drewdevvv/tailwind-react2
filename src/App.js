import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          This is a test Tailwind-React app.
        </p>
        <a
          className="App-link"
          href="https://github.com/drewdevvv"
          target="_blank"
          rel="noopener noreferrer"
        >
          Check out my Github
        </a>
      </header>
    </div>
  );
}

export default App;
