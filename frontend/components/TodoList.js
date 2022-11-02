import React from 'react';
import Todo from './Todo.js';

export default class TodoList extends React.Component {
  render() {
    return (
      <div>
        <ul>
          {this.props.data.map(item => <Todo todoItem={item}/>)}
        </ul>
      </div>
    )
  }
}
