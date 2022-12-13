import React from 'react'

const Display = (props) => {

  const colors = {
    color:props.color1,
    backgroundColor:props.color2,
    height:'150px',
    display:'flex',
    alignItems:'center',
    justifyContent:'center'
  }

  return (
    <div style={colors}>
      <h1>{isNaN(props.display)?`The word is: ${props.display}`:`The number is: ${props.display}`}</h1>
    </div>
  )
}

export default Display