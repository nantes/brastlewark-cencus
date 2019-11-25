import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { filterPopulationByName } from '../../actions';
import ProfessionFilter from '../ProfessionFilter';
import './styles.css';

class SearchBar extends PureComponent {
  render() {
    const { searchValue, searchByName } = this.props;
    return (
      <section className="hero is-primary is-bold">
        <div className="hero-body">
          <div className="container">
            <h1 className="title">
              Gnome Search
            </h1>
            <div className="field population-search-field columns">
              <div className="control column">
                <input
                  aria-label="search-input"
                  className="input is-primary is-rounded"
                  type="text"
                  placeholder="search by name"
                  onChange={(e) => searchByName(e.target.value)}
                  value={searchValue}
                />
              </div>
              <div className="control column profession-filter">
                <ProfessionFilter />
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

SearchBar.propTypes = {
  searchValue: PropTypes.string.isRequired,
  searchByName: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({ searchValue: state.searchValue });

const mapDispatchToProps = (dispatch) => ({
  searchByName: (value) => {
    dispatch(filterPopulationByName(value));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(SearchBar);
