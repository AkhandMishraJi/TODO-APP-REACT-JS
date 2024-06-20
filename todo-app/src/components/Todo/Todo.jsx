function Todo({tododata , isFinished}) {
    return (
        <div>
             <input type="checkbox" name="" id="" checked={isFinished}/>
        {tododata}
         <button>EDIT</button>
         <button>DELETE</button>   
        </div>
    )
}
export default Todo
