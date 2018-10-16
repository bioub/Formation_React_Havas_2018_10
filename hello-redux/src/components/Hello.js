import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { selectName } from '../selectors';

// stateless component 
function Hello({name = 'Jean'}) {
  return (
    <div className="Hello">
      Hello {name}
    </div>
  );
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

const mapStateToProps = (state) => ({
  name: selectName(state),
});

export default connect(mapStateToProps)(Hello);