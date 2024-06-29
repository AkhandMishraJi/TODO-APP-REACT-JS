import { addTodo } from "../../actions/todoActions"
import {  useState } from "react"
import {useDispatch} from "react-redux"
function AddTodo() {
   const dispatch = useDispatch()
   const [inputText , setInputText] = useState('')
    return (
        <div>
            <input type="text" 
            placeholder="ADD TODO FOR YOUR NEXT WORK"
            value={inputText}
            id="text"
            onChange={e => setInputText(e.target.value)}
            />
            <button onClick={() =>  {
         
                dispatch(addTodo(inputText))
                   
                 setInputText('')}}>ADD</button>
        </div>
    )
}
export default AddTodo
