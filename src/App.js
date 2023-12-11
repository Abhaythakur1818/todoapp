// import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';
import TodoInput from './TodoInput';
import TodoList from './TodoList';

function App() {
  const [listTodo, setListTodo] = useState([]);

  let addList = (inputText)=>{
    if(inputText !=='')
      setListTodo([...listTodo, inputText]);
  }

  const deleteListItem = (key) =>{
    let newListTodo = [...listTodo]
    newListTodo.splice(key, 1);
    setListTodo([...newListTodo]);
  }

  return (
    <div className = "main-container">
      <div className= 'center-container'>
        <TodoInput addList = {addList}/>
        <h1 className='app-heading'>TODO</h1>
        <hr/>
        {listTodo.map((ListItem , i)=>
        {
          return (
            <TodoList key = {i} index = {i} items ={ListItem} deleteitem = {deleteListItem}/>
          )
        })}
      </div>
    </div>
  );
}

export default App;
