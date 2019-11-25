/* eslint-disable max-len */
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import GnomeCard from '../GnomeCard';
import Spinner from '../Spinner';
import GnomeModal from '../GnomeModal';
import './styles.css';

const PopulationList = (props) => {
  const [modalActive, setModalActive] = useState(false);
  const [modalData, setModalData ] = useState({});
  const openModal = (data) => {
    setModalData(data);
    setModalActive(true);
  };
  const closeModal = () => {
    setModalActive(false);
    setModalData({});
  };
  const { loading, population } = props;
  return (
    <div className="population-list">
      {!loading
        ? population.map((gnome) => (
          <GnomeCard key={gnome.id} gnome={gnome} openModal={openModal} />
        ))
        : <Spinner />}
      {modalActive && <GnomeModal gnome={modalData} active={modalActive} closeModal={closeModal} />}
    </div>
  );
};
PopulationList.propTypes = {
  population: PropTypes.arrayOf(PropTypes.object).isRequired,
  loading: PropTypes.bool.isRequired,
};
export default PopulationList;
