import React from 'react'

export default class Form extends React.Component {
  render() {
    return (
      <div>
        <form>
          <input type="text" placeholder='New Todo Item' />
          <button type="submit">Add Item</button>
        </form>
      </div>
    )
  }
}
