import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { filterPopulationByName } from '../../actions';
import ProfessionFilter from '../ProfessionFilter';

class SearchBar extends PureComponent {
  render() {
    const { searchValue, searchByName } = this.props;
    return (
      <section>
        <div>
          <h1>
             Population Search
          </h1>
          <div>
            <div>
              <input
                aria-label="search-input"
                type="text"
                placeholder="search by name"
                onChange={(e) => searchByName(e.target.value)}
                value={searchValue}
              />
            </div>
          </div>
          <div>
            <ProfessionFilter />
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
