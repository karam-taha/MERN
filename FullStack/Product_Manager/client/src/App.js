import './App.css';
import {
  Routes,
  Route,
} from "react-router-dom";
import Main from './views/Main';
import Details from './views/Details';
import Update from './views/Update';

function App() {
  return (
      <div className="App">
      <Routes>
        <Route element={<Main/>} path="/products/"/>
        <Route element={<Details/>} path="/products/:id"/>
        <Route element={<Update/>} path="/products/:id/edit"/>
      </Routes>
    </div>
  );
}

export default App;
