import React from 'react'
import Form from './Form'
import ToDoList from './TodoList'

export default class App extends React.Component {
  constructor() {
    super()
    this.state = {
      todoData: [
        {
          task: 'test task incomplete',
          completed: false
        },
        {
          task: 'test task complete',
          completed: true
        }
      ]
    }
  }
  render() {
    return (
      <div>
        <ToDoList />
        <Form />
      </div>
    )
  }
}
