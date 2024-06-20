import { useState } from "react"

function Todo({tododata , isFinished , changeFinished, onDelete , onEdit}) {
const [finished , setFinished] = useState(isFinished)
const [isEditting , setIsEditting] = useState(false)   
const [editText , setEditText] = useState(tododata)
return (
        <div>
             <input type="checkbox"  checked={finished} onChange={(e) =>{  
                setFinished(e.target.checked)
            changeFinished(e.target.checked)
             }}/>
        {(isEditting) ? <input type="text" onChange={e  => setEditText(e.target.value)} value={editText} />: <span>{tododata}</span> }
         <button onClick={() =>{
            setIsEditting(!isEditting)
            onEdit(editText)
         }}>{(!isEditting) ? 'EDIT' : 'SAVE' }</button>
         <button onClick={onDelete}>DELETE</button>   
        </div>
    )
}
export default Todo
