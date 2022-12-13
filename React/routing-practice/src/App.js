import './App.css';
import Home from './components/Home';
import { Router } from '@reach/router';
import Display from './components/Display';

function App() {
  return (
    <div className="App">
      <Router>
        <Home path="/Home"/>
        <Display path="/:display"/>
        <Display path="/:display/:color1/:color2"/>
      </Router>
    </div>
  );
}

export default App;
