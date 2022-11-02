import React from 'react'

export default class Form extends React.Component {
  render() {
    return (
      <div>
      <form onSubmit={this.props.addTodoItem}></form>
        <input type="text" placeholder='New Todo Item' onChange={evt => console.log(evt.target.value)} />
        <button type="Submit">Add Item</button>
        <br/>
        <button type="button">Hide Complete</button>
      </div>
    )
  }
}
