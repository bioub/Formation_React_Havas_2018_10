import React, { Component } from 'react';
import Hello from './Hello';
import Clock from './Clock';
import ButtonCounter from './ButtonCounter';
import ClockHideable from './ClockHideable';
import Dropdown from './Dropdown';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Hello />
        <Hello name="Romain" />
        <hr />
        <Clock  />
        <hr />
        <ButtonCounter />
        <hr />
        <ClockHideable />
        <hr />
        <Dropdown items={['Rouge', 'Vert', 'Bleu']}/>
      </div>
    );
    /*
    return React.createElement('div', { className: 'App'},
      React.createElement('div', {}, 'Hello'),
    );
    */
  }
}

export default App;
