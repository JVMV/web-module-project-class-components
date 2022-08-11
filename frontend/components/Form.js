import React from 'react'

export default class Form extends React.Component {
  addToDo = e => {
    e.preventDefault()
  }
  render() {
    return (
      <>
      <form onSubmit={null}>
        <input className='input' type='text' placeholder='Add something to do' />
        <button onClick={this.addToDo}>Add</button>
      </form>
      <button onClick={this.addToDo}>Clear Completed Tasks</button>
      </>
    )
  }
}
