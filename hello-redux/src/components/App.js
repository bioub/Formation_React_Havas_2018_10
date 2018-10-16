import React, { Component } from 'react';
import './App.css';
import ButtonCounter from './ButtonCounter';
import Hello from './Hello';

class App extends Component {
  render() {
    return (
      <div className="App">
        <ButtonCounter />
        <ButtonCounter />
        <Hello />
      </div>
    );
  }
}

export default App;
