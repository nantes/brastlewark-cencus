import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import PopulationList from '../../components/PopulationList';
import SearchBar from '../../components/SearchBar';

class PopulationContainer extends PureComponent  {
  render() {
    const { population } = this.props;
    return (
      <>
        <SearchBar />
        <PopulationList population={population} />
      </>
    );
  }
}
PopulationContainer.propTypes = {
  population: PropTypes.arrayOf(PropTypes.object).isRequired,
};

const mapStateToProps = (state) => ({
  population: state.filteredPopulation,
});

export default connect(mapStateToProps)(PopulationContainer);
