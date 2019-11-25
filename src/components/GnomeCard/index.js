
import React, { PureComponent, Suspense } from 'react';
import PropTypes from 'prop-types';
import './styles.css';
import Spinner from '../Spinner';
const ThumbImage  = React.lazy(() => import('../ThumbImage'));

class GnomeCard extends PureComponent {

  render() {
    const { gnome, openModal } = this.props;
    return (
      <div className="tile is-parent">
        <div onClick={ () => openModal(gnome)} className="tile is-child box card gnome-card">
          <div className="card-image">
            <figure className="image is-4by3">
              {/* Suspense is still expermimental */}
              <Suspense fallback={<Spinner />}>
              <ThumbImage src={gnome.thumbnail} />
              </Suspense>
            </figure>
          </div>
          <div className="card-content">
            <p className="title is-4">{gnome.name}</p>
            <p className="subtitle is-6">{gnome.professions.join(', ')}</p>
          </div>
        </div>
      </div>
    );
  }
}

GnomeCard.propTypes = {
  gnome: PropTypes.objectOf(PropTypes.any).isRequired
};

export default GnomeCard;
