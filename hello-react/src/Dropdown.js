import React, { Component } from 'react';
import PropTypes from 'prop-types';
import uuid from 'uuid';

class Dropdown extends Component {
  render() {
    let { items = [] } = this.props;

    items = items.map((item) => <option key={uuid()}>{item}</option>);

    return (
      <select>
        {items}
      </select>
    )
  }
}

Dropdown.propTypes = {
  items: PropTypes.arrayOf(PropTypes.string),
}

export default Dropdown;