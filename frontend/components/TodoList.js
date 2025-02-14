import React from 'react'
import Todo from './Todo' 

export default class TodoList extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div>
        {this.props.todoData.map(todo => <Todo todo={todo} markTodo={this.props.markTodo}/>)}
      </div>
    )
  }
}
