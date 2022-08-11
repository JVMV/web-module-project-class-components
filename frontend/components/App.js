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
    const newTodo = {
      name: this.state.initial,
      completed: false,
      key: ukey()
    }
    if(this.state.initial) {
      this.setState(() => ({todoData: [...this.state.todoData, newTodo]}))
      this.setState(() => ({initial: ''}))
    }
  }
  onChange = e => {
    this.setState(() => ({initial: e.target.value}))
  }
  onClear = e => {
    e.preventDefault()
    // const newList = () => {
    //   this.state.todoData.filter(todo => {
    //   todo.completed !== true ? todo : null
    //   })
    //   console.log(newList)
    const newList = this.state.todoData.filter(todo => todo.completed !== true ? todo : null)
      this.setState(() => ({todoData: newList}))
  }
  markTodo = e => {
      this.state.todoData.forEach(todo => {
        todo.name === e.target.innerHTML 
        ? this.setState(() => ({todoData: [...todoData, !completed]}))
        : null
      })
    
    // this.setState({
    //   this.state.todoData.forEach()
    // })
  }

  render() {
    return (
      <div>
        <ToDoList todoData={this.state.todoData} markTodo={this.markTodo}/>
        <Form initial={this.state.initial} addTodo={this.addTodo} onChange={this.onChange} onClear={this.onClear}/>
      </div>
    )
  }
}
