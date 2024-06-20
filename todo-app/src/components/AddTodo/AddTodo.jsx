import { useState } from "react"

function AddTodo({updateList}) {
   const [inputText , setInputText] = useState('')
    return (
        <div>
            <input type="text" 
            placeholder="ADD TODO FOR YOUR NEXT WORK"
            value={inputText}
            onChange={e => setInputText(e.target.value)}
            />
            <button onClick={() => updateList(inputText)}>ADD</button>
        </div>
    )
}
export default AddTodo