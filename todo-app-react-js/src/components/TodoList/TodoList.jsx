
import { useDispatch, useSelector } from "react-redux"
import Todo from "../Todo/Todo"

function TodoList() {
   const dispatch = useDispatch()
const list = useSelector((state) => state.todo)
   function onFinished(todo ,isFinished) {
        dispatch({type : "finish_todo" , payload : {todo , isFinished : isFinished}})

   }
   function onDelete(todo) {
    dispatch({type : "delete_todo" , payload : {todo}})

   }
   function onEdit(todo , todoText) {
    dispatch({type : "edit_todo" , payload : {todo , todoText}})

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
