import React, {Component} from "react"
import TodoItem from "./TodoItem.js"
import Header from "./Header.js"
import AddDate from "./Date.js"
import TodoData from "./TodoData.js"

// TodoList App class component
class App extends Component{
    constructor(){
        super()
        // Setting state to the current list of todo items
        this.state = {todos: TodoData}    
        // Binding class method to the class
        this.handleChange = this.handleChange.bind(this)
    }
    
/* 
handleChange(id)
Input: the Id of the items that is being checked or unchecked
Description: Method to handle the logic for Todo list item checkboxes being checked/unchecked  
*/
    handleChange(id){
    // Changes state to update item completetion status
    this.setState(prevState => {const newTodos = prevState.todos.map(todo => {  
              // checks if the item id matches the id of the changed item 
              if (todo.id == id){
                  // Reverses completion status of corresponding item
                  todo.completed = !todo.completed
                  }
                  return todo
          }
          )
          // Returns the updated array of todo items
          return{
              todos: newTodos
          }
          })}
    
    // Render method handling display logic
    render(){
    // Makes input array of Todo List items into TodoItem Components
    const todoItems = this.state.todos.map(item => <TodoItem key = {item.id} theItem= {item} handleChange = {this.handleChange} />)
    return(
        // Div containing array of 4 TodoItem components, the header component, and the current date component 
        <div className = "todo-list">
        <Header />
        <AddDate />
        {todoItems}
         </div>
    )
    }     
}

export default App