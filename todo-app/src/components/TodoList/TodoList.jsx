import { useState } from "react"
import Todo from "../Todo/Todo"

function TodoList({list}) {
    // const [list , setList]  = useState([
         
    //         {id : 1 , todoData : 'todo 1'},
    //         {id : 2 , todoData : 'todo 2'},
    //         {id : 3 , todoData : 'todo 3'},
    //         {id : 4 , todoData : 'todo 4'},
    //         {id : 5 , todoData : 'todo 5'},
    //         {id : 6 , todoData : 'todo 6'},
    //         {id : 7 , todoData : 'todo 7'}
        
    // ])
return (
<div>
{list.length > 0 && list.map(todo => <Todo key={todo.id} isFinished={todo.finished} tododata={todo.tododata}/>)}
</div>
)
}
export default TodoList