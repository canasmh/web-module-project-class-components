import React from 'react'
import TodoList from './TodoList'
import Form from './Form'

export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      todoItems: ["Hello", "World", "How", "Are", "You"]
    };
  }
  render() {
    return (
      <div>
      <h2>Todo List</h2>
        <TodoList data={this.state.todoItems} />
        <Form />
      </div>
    )
  }
}
