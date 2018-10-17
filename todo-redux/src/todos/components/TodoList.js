import React, { PureComponent } from 'react';
import TodoItem from './TodoItem';
import { arrayOf, shape, string, bool } from 'prop-types';

class TodoList extends PureComponent {
  static propTypes = {
    todos: arrayOf(shape({text: string, done: bool, id: string})),
  };

  handleRemove = (todo) => {
    const i = this.props.todos.indexOf(todo);
    this.props.todos.splice(i, 1);
    this.forceUpdate();
  };

  render() {
    const { todos = [] } = this.props;

    return todos.map((t) => <TodoItem key={t.id} todo={t} onRemove={this.handleRemove} />);
  }
}

export default TodoList;