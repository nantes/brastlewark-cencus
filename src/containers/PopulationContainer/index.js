import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

class PopulationContainer extends PureComponent  {
  render() {
    return (
      <></>
    );
  }
}
PopulationContainer.propTypes = {
  population: PropTypes.arrayOf(PropTypes.object).isRequired,
};

const mapStateToProps = (state) => ({
  population: state.population,
});

export default connect(mapStateToProps)(PopulationContainer);
