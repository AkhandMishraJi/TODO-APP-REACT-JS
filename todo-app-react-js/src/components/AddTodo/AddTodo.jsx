
import { useContext, useState } from "react"
import TodoDispatchContext from "../../context/TodoDispatchContext";

function AddTodo() {
   const [inputText , setInputText] = useState('')
   const {dispatch} = useContext(TodoDispatchContext)
    return (
        <div>
            <input type="text" 
            placeholder="ADD TODO FOR YOUR NEXT WORK"
            value={inputText}
            id="text"
            onChange={e => setInputText(e.target.value)}
            />
            <button onClick={() =>  {
         
                dispatch({type : "add_todo" , payload : {todoText :  inputText}})
                   
                 setInputText('')}}>ADD</button>
        </div>
    )
}
export default AddTodo
