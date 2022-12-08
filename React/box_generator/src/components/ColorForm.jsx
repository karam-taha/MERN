import React, {useState} from 'react'

const ColorForm = (props) => {
  const {inputs, setInputs} = props;

  const [color, setColor] = useState("");
  const [length, setLength] = useState(0);

  const handleSubmit = (e) => {
    e.preventDefault();
    const newBox = {
      color: color,
      length: length
    };
    setInputs([...inputs, newBox]);
    setColor("");
    setLength(0);
  };

  return (
    <form onSubmit={handleSubmit}>
        <div className='input'>
          <label>Color </label>
          <input onChange={ (e) => setColor(e.target.value)} type="text" value={color}/>
        </div>
        <div className='input'>
          <label>Size </label>
          <input onChange={ (e) => setLength(e.target.value)} type="number" step="1" value={length}/>
        </div>
        <input className='button' type="submit" value="Create a box" />
    </form>
  )
}

export default ColorForm