import React, { Component } from 'react';
import { func } from 'prop-types';

class TodoForm extends Component {

  static propTypes = {
    onNewTodo: func.isRequired,
  };


  handleSubmit = (event) => {
    event.preventDefault();
    // dispatch -> TODO_ADD
  };

  handleChange = (event) => {
    event.preventDefault();
    // dispatch -> TODO_CHANGE
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input value={this.state.todoText} onChange={this.handleChange}/>
        <button>+</button>
      </form>
    );
  }
}

export default TodoForm;