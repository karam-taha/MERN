import React, {useState} from 'react';

const Tabs = () => {
  const tabs = ["Tab 1", "Tab 2", "Tab 3"]
  const [msg, setMsg] = useState("");

  const clickhandler = (e,x) =>{
    e.preventDefault();
    setMsg(x + " content is showing here.");

} 

  return (
    <div className='main'>
      <div className='tabs'>
        {
        tabs.map((value,i)=>{
        return <button key={i} onClick={(e)=>clickhandler(e,value,i)}>{value}</button>
          })
        }
      </div>
      <div className='box'><p>{msg}</p></div>
    </div>
  )
}

export default Tabs