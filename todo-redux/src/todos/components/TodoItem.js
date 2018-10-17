import { bool, shape, string, func } from 'prop-types';
import React, { Component } from 'react';

class TodoItem extends Component {
  static propTypes = {
    todo: shape({text: string, done: bool, id: string}),
    onRemove: func,
  };

  state = {
    checked: this.props.todo.done,
  };

  handleChange = (event) => {
    this.setState({
      checked: event.target.checked,
    })
  };

  handeClick = () => {
    this.props.onRemove(this.props.todo);
  };

  render() {
    return (
      <div>
        <input type="checkbox" checked={this.state.checked} onChange={this.handleChange} />
        {this.props.todo.text}
        <button onClick={this.handeClick}>-</button>
      </div>
    );
  }
}

export default TodoItem;