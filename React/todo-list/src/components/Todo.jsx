import React, {useState, useEffect} from 'react'


const Todo = () => {
const [newTodo, setNewTodo] = useState("");
const [todos, setTodos] = useState([]);

useEffect(() => {
  const data = window.localStorage.getItem('AppKey');
  if ( data !== null ) setTodos(JSON.parse(data));
  console.log(data)
}, []);

useEffect(() => {
  window.localStorage.setItem('AppKey', JSON.stringify(todos));
  console.log(todos)
}, [todos]);

const handleNewTodoSubmit = (event) => {
  event.preventDefault();

  if(newTodo.length === 0 ){
    return;
  }

  const todoItem = {
    text: newTodo,
    complete: false
  }

  setTodos([...todos, todoItem]);
  setNewTodo("");
}

const handleTodoDelete = (delIdx) => {
  const filteredTodos = todos.filter((todo, i) =>{
    return i !== delIdx;
  });
  setTodos(filteredTodos);
}

const handleToggleComplete = (idx)=> {
  const updatedTodos = todos.map((todo, i) => {
    if(idx === i) {
      todo.complete = !todo.complete;
      //to avoid mutating the todo directly, do this:
      // const updatedTodo = { ...todo, compelte: !todo.complete };
      // return updatedTodo
    }
    return todo;
  });
  setTodos(updatedTodos);
}

  return (
    <div>
      <div className='todo'>
        <form onSubmit={(event)=>{
          handleNewTodoSubmit(event);
        }}>
          <input onChange={(event) => {
            setNewTodo(event.target.value);
          }} type="text" value={newTodo} />
          <div>
            <button>Add</button>
          </div>
        </form>
        <div className='list'>
        {todos.map((todo, i) => {
          const todoClasses = [];
          if (todo.complete) {
            todoClasses.push("done");
          }
          return (
            <div key={i} className='input'>
              <div>
                
                <span className={todoClasses.join(" ")}>{todo.text}</span>
                <input onChange={(event)=>{
                  handleToggleComplete(i);
                }} checked={todo.complete} type="checkbox" />
              </div>
              <button onClick={(event) => {
                handleTodoDelete(i);
              }}>Delete</button>
            </div>
          )})
        }
        </div>
      </div>
    </div>
  )
}

export default Todo