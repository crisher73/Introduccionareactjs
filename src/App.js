
//import './App.css';

import React from "react";
import {TodoCounter} from "./Components/TodoCounter/TodoCounter";
import { TodoSearch } from "./Components/TodoSearch/TodoSearch.js";
import { TodoList } from "./Components/TodoList/TodoList.js";
import { TodoItem } from "./Components/TodoItem/TodoItem.js";
import { CreateTodoButton } from "./Components/CreateTodoButton/CreateTodoButton.js";

const defaultTodos = [
  {text: 'Tomar pedidos del día', completed: true},
  {text: 'Estudiar React.js', completed: false},
  {text: 'Salir a montar bici', completed: true},
  {text: 'Crear contenido para instagram', completed: false},
];

function App() {
  const [todos,setTodos]=React.useState(defaultTodos);
  const [searchValue, setSearchValue]=React.useState('');

  const completedTodos = todos.filter(todo => !!todo.completed).length;
  const totalTodos= todos.length;

  let searchedTodos = [];

  if(!searchValue.length >= 1) {
    searchedTodos = todos;
  } else {
    searchedTodos = todos.filter(todo => {
      const todoText = todo.text.toLowerCase();
      const searchText = searchValue.toLowerCase();
      return todoText.includes(searchText);
    })
  }

  const completeTodo = (text) => {
    const todoIndex = todos.findIndex(todo => todo.text === text);
    const newTodos = [...todos];
    newTodos[todoIndex].completed = true;
    setTodos(newTodos);
  };

  const deleteTodo = (text) => {
    const todoIndex = todos.findIndex(todo => todo.text === text);
    const newTodos = [...todos];
    newTodos.splice(todoIndex, 1);
    setTodos(newTodos);
  };

  return (
    <React.Fragment>
   <TodoCounter 
   total= {totalTodos}
   completed={completedTodos}
   />    
      

      <TodoSearch 
      searchValue={searchValue}
      setSearchValue={setSearchValue}
      />

      <TodoList>
        {searchedTodos.map(todo =>(
        <TodoItem
         key={todo.text}
         text={todo.text}
         completed= {todo.completed} 
         onComplete={()=> completeTodo(todo.text)}
         onDelete={()=> deleteTodo(todo.text)}
          />
          ))}
      </TodoList>
      <CreateTodoButton />  
    </React.Fragment>
  );
}

export default App;
