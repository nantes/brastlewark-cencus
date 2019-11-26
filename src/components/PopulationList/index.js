/* eslint-disable no-use-before-define */
/* eslint-disable max-len */
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import GnomeCard from '../GnomeCard';
import Spinner from '../Spinner';
import GnomeModal from '../GnomeModal';
import useInfiniteScroll from '../../utils/infiniteScroll';
import './styles.css';

const PopulationList = (props) => {
  const { population, loading } = props;
  const [modalActive, setModalActive] = useState(false);
  const [modalData, setModalData] = useState({});
  const [pageSize, setPageSize] = useState(20);
  const fetchMore = () => {
    setPageSize((previousState) => previousState + 20);
    setIsFetching(false);
  };
  const [isFetching, setIsFetching] = useInfiniteScroll(fetchMore);
  const openModal = (data) => {
    setModalData(data);
    setModalActive(true);
  };
  const closeModal = () => {
    setModalActive(false);
    setModalData({});
  };
  return (
    <div className="population-list">
      {(!loading && population.length)
        ? population.filter((gnome, index) => index < pageSize).map((gnome) => (
          <GnomeCard key={gnome.id} gnome={gnome} openModal={openModal} />
        ))
        : <Spinner />}
      {isFetching && 'Fetching more list items...'}
      {modalActive && <GnomeModal gnome={modalData} active={modalActive} closeModal={closeModal} />}
    </div>
  );
};
PopulationList.propTypes = {
  population: PropTypes.arrayOf(PropTypes.object).isRequired,
  loading: PropTypes.bool.isRequired,
};
export default PopulationList;
