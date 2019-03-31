import React from "react"

// Components which for the checkbox and item name
function TodoItem(props){
    return(
    // styling for the checkbox and item name
    <div className = "todo-item">
    <input  type = "checkbox" />
    <p> {props.item} </p>
    </div>
    )
}

export default TodoItem

/*
****Code allowing users to manually enter an entry using a form****
<div className = "todo-item">
    <input type = "checkbox" />
    <div className = "item-text">
    <input type = "text" />
    </div>
    </div>
*/