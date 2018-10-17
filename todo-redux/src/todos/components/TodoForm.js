import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { func } from 'prop-types';
import { selectNewTodo } from '../selectors';
import { todoChange, todoAdd } from '../actions';

class TodoForm extends PureComponent {
  static propTypes = {
    onNewTodo: func.isRequired,
  };

  render() {
    return (
      <form onSubmit={(event) => this.props.handleSubmit(event, this.props.todoText)}>
        <input value={this.props.todoText} onChange={this.props.handleChange}/>
        <button>+</button>
      </form>
    );
  }
}

const mapStateToProps = (state) => ({
  todoText: selectNewTodo(state),
});

const mapDispatchToProps = (dispatch) => ({
  handleSubmit: (event, todoText) => {
    event.preventDefault();
    dispatch(todoAdd(todoText));
  },
  handleChange: (event) => dispatch(todoChange(event.target.value)),
});

export default connect(mapStateToProps, mapDispatchToProps)(TodoForm);