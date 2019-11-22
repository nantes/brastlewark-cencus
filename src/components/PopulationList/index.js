import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import GnomeCard from '../GnomeCard';

class PopulationList extends PureComponent {
  render() {
    const { population } = this.props;
    return (
      <div>
        {
              population.map((gnome) => (
                <GnomeCard key={gnome.id} gnome={gnome} />
              ))
          }
      </div>
    );
  }
}

PopulationList.propTypes = {
  population: PropTypes.arrayOf(PropTypes.object).isRequired,
};
export default PopulationList;
