import React, { Component } from 'react';
import PropTypes from 'prop-types';
import uuid from 'uuid';

class Dropdown extends Component {

  static propTypes = {
    items: PropTypes.arrayOf(PropTypes.string),
    onSelect: PropTypes.func,
  }

  state = {
    selected: this.props.items[0],
  }

  handleChange = (event) => {
    // remonter la valeur au parent
    // event.target.value
    this.props.onSelect(event.target.value);
    this.setState({
      selected: event.target.value,
    })
  };

  render() {
    let { items = [] } = this.props;

    items = items.map((item) => <option key={uuid()}>{item}</option>);
    

    return (
      <select onChange={this.handleChange} value={this.state.selected}>
        {items}
      </select>
    )
  }
}


export default Dropdown;