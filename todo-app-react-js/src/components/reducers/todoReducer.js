function todoReducer(state , action) {
    if (action.type == "add_todo") {
        let todoText = action.payload.todoText
        return[
            ...state , { id : state.length+1 ,tododata : todoText , finished : false}
        ]
    } else if (action.type == "edit_todo") {
        let todo = action.payload.todo
        let todoText = action.payload.todoText
        const updatedList = list.map(t =>{
            if (t.id == todo.id) {
                todo.tododata = todoText
            }
            return t 
       })
       return updatedList 
    } else if (action.type == "delete_todo") {
        let todo = action.payload.todo
        const updatedList = state.filter(t => t.id !== todo.id) 
return updatedList
    }
}
export default todoReducer
