import {  useState } from "react"
function AddTodo({addTodo}) {
   const [inputText , setInputText] = useState('')
    return (
        <div>
            <input type="text" 
            placeholder="ADD TODO "
            value={inputText}
            id="text"
            onChange={e => setInputText(e.target.value)}
            />
            <button onClick={() =>  {
         
                addTodo(inputText)
                   
                 setInputText('')}}>ADD</button>
        </div>
    )
}
export default AddTodo
