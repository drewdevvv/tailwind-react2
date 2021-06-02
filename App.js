import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <a
          href="https://github.com/drewdevvv/drewdevvv"
          target="_blank"
          rel="noopener noreferrer"
        ><img src={logo} className="App-logo" alt="logo" /></a>
        <p class="p-8">
          This is a test Tailwind-React app.
        </p>
        <div class="p-6 max-w-sm mx-auto bg-gray rounded-xl shadow-lg justify-content center">
        <a
          href="https://github.com/drewdevvv"
          target="_blank"
          rel="noopener noreferrer"
        >
          Check out my Github
        </a>
        </div>
      </header>
      <div class="p-6 max-w-sm mx-auto bg-gray rounded-xl shadow-lg justify-content center">Hello World!</div>
    <p class="p-6 max-w-sm mx-auto bg-gray rounded-xl shadow-lg justify-content center">I am Drew</p>
  </div>
  );
}

export default App;
