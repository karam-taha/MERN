import './App.css';
import { Link, Route, Routes } from 'react-router-dom';
import Main from './views/Main';
import Submit from './views/Submit';
import Status from './views/Status';

function App() {
  return (
    <div className="App">
      <h2>
        <Link to={"/players/list"}>Manage Players</Link>|
        <Link to={"/status/game/1"}>Manage Player Status</Link>
      </h2>
      <Routes>
        <Route element={<Main/>} path="/players/list"/>
        <Route element={<Submit/>} path="/players/addplayer"/>
        <Route element={<Status/>} path="/status/game/:num"/>
      </Routes>
    </div>
  );
}

export default App;
