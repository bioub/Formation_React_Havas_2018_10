import React, { Component } from 'react';
import { func } from 'prop-types';

class TodoForm extends Component {

  static propTypes = {
    onNewTodo: func.isRequired,
  };

  state = {
    todoText: ''
  };

  handleSubmit = (event) => {
    event.preventDefault();
    this.props.onNewTodo(this.state.todoText);
  };

  handleChange = (event) => {
    event.preventDefault();
    this.setState({
      todoText: event.target.value,
    });
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