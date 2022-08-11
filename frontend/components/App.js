import React from 'react'
import Form from './Form'
import ToDoList from './TodoList'

export default class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      todoData: [
        {
          name: 'test task incomplete',
          completed: false,
          key: 1923
        },
        {
          name: 'test task complete',
          completed: true,
          key: 1935
        }
      ],
      initial: ''
    }
  }
  addTodo = e => {
    e.preventDefault()
    const ukey = () => Math.floor(Math.random() * 9999)
    // console.log(ukey())
    const newTodo = {
      name: this.state.initial,
      completed: false,
      key: ukey()
    }
    this.setState(() => ({todoData: [...this.state.todoData, newTodo]}))
    this.setState(() => ({initial: ''}))
    // debugger
  }

  onChange = e => {
    this.setState(() => ({initial: e.target.value}))
  }
  

  render() {
    return (
      <div>
        <ToDoList todoData={this.state.todoData} />
        <Form initial={this.state.initial} addTodo={this.addTodo} onChange={this.onChange}/>
      </div>
    )
  }
}
