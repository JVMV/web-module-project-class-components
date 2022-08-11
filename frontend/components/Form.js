import React from 'react'

export default class Form extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <>
      <form onSubmit={this.props.addTodo}>
        <input 
          className='input' 
          type='text' 
          placeholder='Add something to do' 
          value={this.props.initial}
          onChange={this.props.onChange}
        />
        <button>Add</button>
      </form>
      <button onClick={this.props.onClear}>Clear Completed Tasks</button>
      </>
    )
  }
}
