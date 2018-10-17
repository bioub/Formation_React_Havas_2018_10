import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import TodoItem from './TodoItem';
import { arrayOf, shape, string, bool } from 'prop-types';
import { selectTodos } from '../selectors';
import { todoRemove } from '../actions';

class TodoList extends PureComponent {
  static propTypes = {
    todos: arrayOf(shape({text: string, done: bool, id: string})),
  };

  handleRemove = (todo) => {
    const i = this.props.todos.indexOf(todo);
    this.props.dispatch(todoRemove(i));
  };

  render() {
    const { todos = [] } = this.props;

    return todos.map((t) => <TodoItem key={t.id} todo={t} onRemove={this.handleRemove} />);
  }
}

const mapStateToProps = (state) => ({
  todos: selectTodos(state),
});

export default connect(mapStateToProps)(TodoList);