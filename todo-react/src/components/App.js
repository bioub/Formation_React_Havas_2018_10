import React, { Component } from 'react';
import './App.css';
import TodoForm from './TodoForm';
import TodoList from './TodoList';
import uuid from 'uuid';

class App extends Component {

  state = {
    todos: [{
      text: 'Acheter du pain',
      done: false,
      id: uuid(),
    }, {
      text: 'Démarrer Redux',
      done: false,
      id: uuid(),
    }, {
      text: 'Terminer React',
      done: true,
      id: uuid(),
    }],
  };

  handleNewTodo = (todo) => {
    this.setState({
      todos: [...this.state.todos, {
        text: todo,
        done: false,
        id: uuid(),
      }],
    });
  };

  render() {
    return (
      <div className="App">
        <TodoForm onNewTodo={this.handleNewTodo}/>
        <TodoList todos={this.state.todos}/>
      </div>
    );
  }
}

export default App;
