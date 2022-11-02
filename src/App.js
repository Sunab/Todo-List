import react, { useState } from 'react';
import './App.css';

function App() {
  const [newItem, SetnewItem] =useState("");
  const [items, SetItems ] =useState([]);
  function addItem(){
    if(!newItem){
      alert("Items cannot be blank!");
      return;
    }
    const items = {
      id: Math.floor(Math.random() * 1000),
      value: newItem
    };
    SetItems(oldList => [...oldList, items]);
    SetnewItem("");
  }
  function deleteItem(id){
    const newArray = items.filter(items => items.id !==id);
    SetItems(newArray);
  }
  return (
    <div className='App'>
      <h1>Todo List</h1>
     
        <input type="text" placeholder='Enter Task' 
        value={newItem} 
        onChange={e => SetnewItem(e.target.value)}/>
        <button type='submit' onClick={() => addItem()}>Add New Task</button>
      <ul>
        {items.map(items =>{
          return(
            <li key={items.id}>
              {items.value} <button onClick={() => deleteItem(items.id)}>Delete</button>
            </li>
          )
        })}
      </ul>
    </div>
  );
}

export default App;
