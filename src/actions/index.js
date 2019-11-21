import types from './types';

export const fetchPopulation = () => ({
  type: types.FETCH_POPULATION,
});

export const fetchPopulationSuccess = (payload) => ({
  type: types.FETCH_POPULATION_SUCCESS,
  payload,
});

export const fetchPopulationError = (error) => ({
  type: types.FETCH_POPULATION_ERROR,
  error,
});
