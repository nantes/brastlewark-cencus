/* eslint-disable react/no-array-index-key */
import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { filterPopulationByProfession } from '../../actions';

class ProfessionFilter extends PureComponent {
  constructor(props) {
    super(props);
    this.handleInputChange = this.handleInputChange.bind(this);
  }

  handleInputChange(event) {
    const { onSelected } = this.props;
    let { value } = event.target;
    if (value === 'All professions') value = '';
    onSelected(value);
  }

  render() {
    const { professionsList } = this.props;
    return (
      <div className="field">
        <div className="control">
          <div className="select is-primary is-rounded">
            <select onChange={this.handleInputChange}>
              <option>All professions</option>
              {professionsList.map((p, i) => <option key={`profession_${i}`}>{p}</option>)}
            </select>
          </div>
        </div>
      </div>
    );
  }
}

ProfessionFilter.propTypes = {
  professionsList: PropTypes.arrayOf(PropTypes.string).isRequired,
  onSelected: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  professionsList: state.professionsList,
});


const mapDispatchToProps = (dispatch) => ({
  onSelected: (value) => {
    dispatch(filterPopulationByProfession(value));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(ProfessionFilter);
