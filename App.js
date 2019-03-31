import React from "react"
import TodoItem from "./TodoItem.js"
import Header from "./Header.js"
import AddDate from "./Date.js"
import TodoData from "./TodoData.js"

function App(){
    const todoItems = TodoData.map(item => <TodoItem key = {item.id} item = {item.text} />)
    return(
        // App component which returns 4 To do list item components and a header component 
        <div className = "todo-list">
        <Header />
        <AddDate />
        {todoItems}
         </div>
    )     
}

export default App