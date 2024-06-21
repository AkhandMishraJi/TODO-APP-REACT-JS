
import { useContext } from "react"
import Todo from "../Todo/Todo"
import TodoContext from "../../context/TodoContext";
import TodoDispatchContext from "../../context/TodoDispatchContext";

function TodoList() {
    const {list} = useContext(TodoContext)
const {dispatch} = useContext(TodoDispatchContext)
    function onFinished(todo ,isFinished) {
    const updatedList = list.map(t =>{
        if (t.id == todo.id) {
            todo.finished = isFinished
        }
        return t 
        })   
        setList(updatedList)
   }
   function onDelete(todo) {
    dispatch({type : "delete_todo" , payload : {todo}})

   }
   function onEdit(todo , todoText) {
    const updatedList = list.map(t =>{
        if (t.id == todo.id) {
            todo.tododata = todoText
        }
        return t 
   })
        setList(updatedList)
   }
return (
<div>
{list.length > 0 && 

list.map(todo => <Todo 
           key={todo.id}
            id={todo.id} 
            isFinished={todo.finished}
             tododata={todo.tododata}
             changeFinished={(isFinished) => onFinished(todo , isFinished)}
             onDelete = {() => {onDelete(todo)}}
             onEdit={(todoText) => onEdit(todo ,todoText)}
             />)}
</div>
)
}
export default TodoList
