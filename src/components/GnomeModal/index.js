import React, { PureComponent , Suspense}from 'react';
import PropTypes from 'prop-types';
import Spinner from '../Spinner'
const ThumbImage  = React.lazy(() => import('../ThumbImage'))

class GnomeModal extends PureComponent {

  render () {
    const { active, gnome, closeModal } = this.props;
    const modalClassname = `modal ${active ? 'is-active' : ''}`;
    return (
      <div  className={modalClassname}>
        <div  className="modal-background" onClick={closeModal} />
          <div className="modal-content">
            <div className="box">
              <article className="media">
                <div className="media-left">
                  <figure className="image is-128x128">
                    <Suspense fallback={<Spinner />}>
                      <ThumbImage src={gnome.thumbnail} />
                    </Suspense>
                  </figure>
                </div>
                <div className="content">
                  <strong>{gnome.name}</strong>
                  <br />
                  {`Age: ${gnome.age} years`}
                  <br />
                  {`Weight: ${gnome.weight} kg`}
                  <br />
                  {`Height: ${gnome.height} cm`}
                  <br />
                  {`Hair color: ${gnome.hair_color}`}
                  <br />
                    Professions:
                  <ul>{gnome.professions.map((p, i) => <li key={`profession_${i}`}>{p}</li>)}</ul>
                    Friends:
                  {gnome.friends.length === 0 ? ' none' : ''}
                  <ul>{gnome.friends.map((f, i) => <li key={`friend_${i}`}>{f}</li>)}</ul>
                </div>
              </article>
            </div>
          </div>
          <button type="button" aria-label="close" className="modal-close is-large" onClick={closeModal} />
      </div>
    );
  }
}

GnomeModal.propTypes = {
  gnome: PropTypes.objectOf(PropTypes.any),
  closeModal: PropTypes.func,
  active: PropTypes.bool.isRequired,
};

GnomeModal.defaultProps = {
  closeModal: () => {},
};

export default GnomeModal;
