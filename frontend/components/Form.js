import React from 'react'

export default class Form extends React.Component {
  render() {
    return (
      <div>
      <form onSubmit={this.props.handleSubmit}>
        <input type="text" placeholder='New Todo Item' onChange={this.props.handleChange} value={this.props.currentTodo}/>
        <button type="Submit">Add Item</button>
        <br/>
        <button type="button" onClick={this.props.toggleCompleted}>{this.props.showCompleted ? "Hide" : "Show"} Completed</button>
      </form>
      </div>
    )
  }
}
