import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import PopulationList from '../../components/PopulationList';
import SearchBar from '../../components/SearchBar';

class PopulationContainer extends PureComponent  {
  render() {
    const { population, loading } = this.props;
    return (
      <>
        <SearchBar />
        <PopulationList population={population} loading={loading} />
      </>
    );
  }
}
PopulationContainer.propTypes = {
  population: PropTypes.arrayOf(PropTypes.object).isRequired,
  loading: PropTypes.bool.isRequired,
};

const mapStateToProps = (state) => ({
  population: state.filteredPopulation,
  loading: state.loading,
});

export default connect(mapStateToProps)(PopulationContainer);
