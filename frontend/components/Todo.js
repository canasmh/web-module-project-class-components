import React from 'react'

export default class Todo extends React.Component {

  render() {
    return (
      <li onClick={() => this.props.setCompleted(this.props.id)}>{this.props.todoItem} {this.props.completed ? "✅" : ""}</li>
    )
  }
}
