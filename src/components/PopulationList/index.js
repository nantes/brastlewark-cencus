import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import GnomeCard from '../GnomeCard';
import Spinner from '../Spinner';

class PopulationList extends PureComponent {
  render() {
    const { population, loading } = this.props;
    return (
      <div>
        {!loading
          ? population.map((gnome) => (
            <GnomeCard key={gnome.id} gnome={gnome} />
          ))
          : <Spinner />}
      </div>
    );
  }
}

PopulationList.propTypes = {
  population: PropTypes.arrayOf(PropTypes.object).isRequired,
  loading: PropTypes.bool.isRequired,
};
export default PopulationList;
