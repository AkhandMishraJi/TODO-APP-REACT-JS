import { useState } from "react";
import AddTodo from "./components/AddTodo/AddTodo";
import TodoList from "./components/TodoList/TodoList";

function App() {
  const [list , setList]  = useState ([
         
    {id : 1 , tododata : 'todo 1' , finished : false}, 
    {id : 2 , tododata : 'todo 2' , finished : false},
  ])
  return (
    <>
    <AddTodo updateList={(todo) => setList([...list , { id : list.length+1 ,tododata : todo , finished : false}])}/>
    <TodoList list={list}/>
    </>
  );
}

export default App;
