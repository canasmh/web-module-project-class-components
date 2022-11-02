import React from 'react'

export default class Form extends React.Component {
  render() {
    return (
      <div>
        <input type="text" placeholder='New Todo Item' />
        <button>Add Item</button>
      </div>
    )
  }
}
