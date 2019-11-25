import React from 'react';
import { useSelector } from 'react-redux';
import PopulationList from '../../components/PopulationList';
import SearchBar from '../../components/SearchBar';

const PopulationContainer = () => {
  const population = useSelector((state) => state.filteredPopulation);
  const loading = useSelector((state) => state.loading);
  return (
    <>
      <SearchBar />
      <PopulationList population={population} loading={loading} />
    </>
  );
};

export default PopulationContainer;
