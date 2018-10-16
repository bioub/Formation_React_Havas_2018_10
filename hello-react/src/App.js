import React, { Component } from 'react';
import Hello from './Hello';
import Clock from './Clock';
import ButtonCounter from './ButtonCounter';
import ClockHideable from './ClockHideable';
import Dropdown from './Dropdown';
import ContactForm from './ContactForm';

class App extends Component {
  state = {
    couleurs: ['Rouge', 'Vert', 'Bleu'],
    selectedCouleur: 'Rouge',
  };

  handleDropdownSelect = (couleur) => {
    this.setState({
      selectedCouleur: couleur,
    });
  };

  render() {
    return (
      <>
        <Hello />
        <Hello name="Romain" />
        <hr />
        <Clock  />
        <hr />
        <ButtonCounter />
        <hr />
        <ClockHideable />
        <hr />
        <Dropdown items={this.state.couleurs} onSelect={this.handleDropdownSelect} />
        {this.state.selectedCouleur}
        <hr />
        <ContactForm />
      </>
    );
    /*
    return React.createElement('div', { className: 'App'},
      React.createElement('div', {}, 'Hello'),
    );
    */
  }
}

export default App;
