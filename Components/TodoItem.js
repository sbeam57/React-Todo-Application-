import React from "react"

/*
TodoItem(props)
Description: Functional component used to display each item on the todo list 
*/
function TodoItem(props){
    const completedStyle ={
        textDecoration: "line-through", 
    }   
    return(
    // Checkbox and appropriate styling for Todo items with both completed and uncompleted status
    <div className = "todo-item">
    <input  
    type = "checkbox" 
    checked= {props.theItem.completed} 
    onChange = {()=>{props.handleChange(props.theItem.id)}} 
    />
    <p style = {props.theItem.completed ? completedStyle : null}> {props.theItem.text} </p>
    </div>
    )
}

export default TodoItem

