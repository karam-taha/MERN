import React from 'react'

const ColorDisplay = (props) => {

  const boxStyle = {
    backgroundColor: props.inputs.color,
    width: parseInt(props.inputs.length),
    height: parseInt(props.inputs.length),
    display: 'inline-block',
    margin: '10px',
  }

  return (
    <div style={boxStyle}></div>
  )
}

export default ColorDisplay