import './App.css';
import {
  Routes,
  Route,
} from "react-router-dom";
import Main from './views/Main';
import Submit from './views/Submit';
import Update from './views/Update';
import ErrorPath from './views/ErrorPath';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route element={<Main/>} path="/"/>
        <Route element={<Submit/>} path="/new"/>
        <Route element={<Update/>} path="/edit/:id"/>
        <Route element={<ErrorPath/>} path="*"/>
      </Routes>
    </div>
  );
}

export default App;
