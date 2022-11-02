import React from 'react'
import TodoList from './TodoList'
import Form from './Form'

export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      todoItems: [],
      todoObj: [],
      currentTodo: "",
      showCompleted: true
    };
  }

  handleSubmit = (event) => {
    event.preventDefault();
    const newObj = {
      name: this.state.currentTodo,
      id: this.state.todoItems.length,
      completed: false
    }
    this.setState({todoObj: [...this.state.todoObj, newObj]})
    this.setState({todoItems: [...this.state.todoItems, this.state.currentTodo]})
    this.setState({currentTodo: ""})
    console.log(this.state.todoObj);
  }

  handleChange = (event) => {
    const change = event.target.value;
    this.setState({currentTodo: change});
  }

  setCompleted = (index) => {
    
    const newObj = this.state.todoObj[index]
    const completed = !this.state.todoObj[index].completed
    newObj.completed = completed;
    this.setState({todoObj: [...this.state.todoObj.slice(0, index), newObj, ...this.state.todoObj.slice(index+1)]})
  }

  toggleCompleted = () => {
    this.setState({showCompleted: !this.state.showCompleted})
  }

  

  render() {
    return (
      <div>
      
        <h2>Todo List</h2>
        <TodoList data={this.state.showCompleted ? this.state.todoObj : this.state.todoObj.filter(item => !item.completed)} setCompleted={this.setCompleted} showCompleted={this.state.showCompleted} />
        <Form handleSubmit={this.handleSubmit} handleChange={this.handleChange} currentTodo={this.state.currentTodo} toggleCompleted={this.toggleCompleted} showCompleted={this.state.showCompleted} />
      </div>
    )
  }
}
