
import React, { PureComponent, Suspense } from 'react';
import PropTypes from 'prop-types';
import Spinner from '../Spinner';
const ThumbImage  = React.lazy(() => import('../ThumbImage'));

class GnomeCard extends PureComponent {

  render() {
    const { gnome } = this.props;
    return (
      <div>
        <div>
          <figure>
            {/* Suspense is still expermimental */}
            <Suspense fallback={<Spinner />}>
             <ThumbImage src={gnome.thumbnail} />
            </Suspense>
          </figure>
        </div>
        <div>
          <p>{gnome.name}</p>
          <p>{gnome.professions.join(', ')}</p>
        </div>
      </div>
    );
  }
}

GnomeCard.propTypes = {
  gnome: PropTypes.objectOf(PropTypes.any).isRequired
};

export default GnomeCard;
