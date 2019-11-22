import React, { PureComponent } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { filterPopulationByName } from '../../actions';

class SearchBar extends PureComponent {
  render() {
    const { searchValue, filterPopulationByName } = this.props;
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
                onChange={(e) => filterPopulationByName(e.target.value)}
                value={searchValue}
              />
            </div>
          </div>
        </div>
      </section>
    );
  }
}

SearchBar.propTypes = {
  searchValue: PropTypes.string.isRequired,
  filterPopulationByName: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({ searchValue: state.searchValue });

const mapDispatchToProps = (dispatch) => bindActionCreators({ filterPopulationByName }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(SearchBar)