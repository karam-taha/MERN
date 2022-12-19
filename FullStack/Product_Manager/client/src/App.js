import './App.css';
import { Router, Redirect } from "@reach/router";
import Main from './views/Main';

function App() {
  return (
    <div className="App">
      <Router>
        <Main path="/product" />
      </Router>
    </div>
  );
}

export default App;
