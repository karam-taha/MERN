import './App.css';
import Main from './components/Main';
import {Router} from '@reach/router'
import Display from './components/Display';

function App() {

  return (
    <div className="App">
      <Main />
      <Router>
        <Display path=":category/:id" />
      </Router>
    </div>
  );
}

export default App;
