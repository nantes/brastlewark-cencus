import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import PopulationList from '../../components/PopulationList';

class PopulationContainer extends PureComponent  {
  render() {
    const { population } = this.props;
    return (
      <>
        <PopulationList population={population} />
      </>
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
