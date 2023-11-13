import logo from './logo.svg';
import Input from './input.js';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Basic temperature converter
        </p>
              <Input />
             
          </header>
         
    </div>
  );
}


export default App;
