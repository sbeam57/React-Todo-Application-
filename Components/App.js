import React, {Component} from "react"
import TodoItem from "./TodoItem.js"
import Header from "./Header.js"
import AddDate from "./Date.js"
import TodoData from "./TodoData.js"

class App extends Component{
    constructor(){
        super()
        this.state = {todos: TodoData}
        this.handleChange = this.handleChange.bind(this)
    }
    
    handleChange(id){
    this.setState(prevState => {
          const newTodos = prevState.todos.map(todo => {  
              if (todo.id == id){
                  todo.completed = !todo.completed
                  }
                  return todo
          }
          )
          return{
              todos: newTodos
          }
          })}
    

    render(){
    const todoItems = this.state.todos.map(item => <TodoItem key = {item.id} theItem= {item} handleChange = {this.handleChange} />)
    return(
        // App component which returns 4 To do list item components and a header component 
        <div className = "todo-list">
        <Header />
        <AddDate />
        {todoItems}
         </div>
    )
    }     
}

export default App