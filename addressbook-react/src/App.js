import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';
import css from './App.module.css';
import ContactList from './contacts/components/Contacts';

class App extends Component {
  render() {
    return (
      <div className={css.App}>
        <nav className={css.Menu}>
          <Link to="/contact">Contact List</Link>
          <Link to="/contact/add">Contact Add</Link>
        </nav>

        <Route path="/contact" component={ContactList} />
      </div>
    );
  }
}

export default App;
