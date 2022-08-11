import React from 'react'

export default class Todo extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <div onClick={this.props.markTodo}>
        {`${this.props.todo.name} ${this.props.todo.completed ? 'Complete' : 'Incomplete'}`}
      </div>
    )
  }
}
