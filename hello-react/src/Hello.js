import React from 'react';
import PropTypes from 'prop-types';

function Hello({name = 'Jean'}) {
  return <div className="Hello">Hello {name}</div>;
}

/*
Autre moyen de définir des valeurs par défaut au props
Hello.defaultProps = {
  name: 'Jean',
};
*/

Hello.propTypes = {
  name: PropTypes.string,
};

export default Hello;