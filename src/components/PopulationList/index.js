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
  const { population } = props;
  const [modalActive, setModalActive] = useState(false);
  const [modalData, setModalData] = useState({});
  const [listItems, setListItems] = useState(Array.from(Array(20).keys(), (n) => n));
  const fetchMore = () => {
    setListItems((prevState) => ([...prevState, ...Array.from(Array(20).keys(), (n) => n + prevState.length)]));
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
  const { loading } = props;
  return (
    <div className="population-list">
      {(!loading && population.length)
        ? listItems.map((index) => (
          <GnomeCard key={population[index].id} gnome={population[index]} openModal={openModal} />
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
