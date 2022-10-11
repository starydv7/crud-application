import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import HomePage from './components/HomePage';
import Form from './components/Form';

function App() {
  return (
    <div className="App">
      <Navbar />
      <br></br>
      <Form/>
      <HomePage/>
    </div>
  );
}

export default App;
