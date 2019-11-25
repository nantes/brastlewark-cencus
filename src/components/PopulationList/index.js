/* eslint-disable max-len */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import GnomeCard from '../GnomeCard';
import Spinner from '../Spinner';
import GnomeModal from '../GnomeModal';
import './styles.css';


class PopulationList extends Component {
  constructor(props) {
    super(props);
    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
    this.state = {
      modalActive: false,
      modalData: {},
    };
  }

  closeModal() {
    this.setState({
      modalActive: false,
      modalData: {},
    });
  }

  openModal(data) {
    this.setState({
      modalActive: true,
      modalData: data,
    });
  }

  render() {
    const { population, loading } = this.props;
    const { modalActive, modalData } = this.state;
    return (
      <div className="population-list">
        {!loading
          ? population.map((gnome) => (
            <GnomeCard key={gnome.id} gnome={gnome} openModal={this.openModal} />
          ))
          : <Spinner />}
        {modalActive && <GnomeModal gnome={modalData} active={modalActive} closeModal={this.closeModal} />}
      </div>
    );
  }
}

PopulationList.propTypes = {
  population: PropTypes.arrayOf(PropTypes.object).isRequired,
  loading: PropTypes.bool.isRequired,
};

export default PopulationList;
