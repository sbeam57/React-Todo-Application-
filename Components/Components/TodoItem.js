import React from "react"

// Components which for the checkbox and item name
function TodoItem(props){
    const completedStyle ={
        textDecoration: "line-through",
        //textDecorationColor: "red"    
    }   
    return(
    // styling for the checkbox and item name
    
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

/*<p>{props.item.theItem}  </p>
****Code allowing users to manually enter an entry using a form****
<div className = "todo-item">
    <input type = "checkbox" />
    <div className = "item-text">
    <input type = "text" />
    </div>
    </div>
*/