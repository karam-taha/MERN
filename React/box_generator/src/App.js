import React, { useState } from 'react';
import './App.css';
import ColorDisplay from './components/ColorDisplay';
import ColorForm from './components/ColorForm';

function App() {

  const [boxes, setBoxes] = useState([]);
  return (
    <div className="App">
      <ColorForm inputs={boxes} setInputs={setBoxes}/>
      <div>
      {boxes.map((box) =>
        <ColorDisplay inputs={box}/>
      )}
      </div>
    </div>
  );
}

export default App;

