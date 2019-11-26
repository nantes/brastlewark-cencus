import types from '../actions/types';
import { getProfessionList, filterPopulation } from '../selectors';

const initialState = {
  population: [],
  filteredPopulation: [],
  searchValue: '',
  loading: false,
  professionsList: [],
  professionSelected: '',
};

export default (state = initialState, action) => {
  switch (action.type) {
    case types.FETCH_POPULATION:
      return {
        ...state,
        loading: true,
      };
    case types.FETCH_POPULATION_SUCCESS:
      return {
        ...state,
        population: action.payload.Brastlewark,
        filteredPopulation: filterPopulation(action.payload.Brastlewark,
          state.searchValue, state.professionSelected),
        professionsList: getProfessionList(action.payload.Brastlewark),
        loading: false,

      };
    case types.FETCH_POPULATION_ERROR:
      return state;
    case types.FILTER_POPULATION_BY_NAME:
      return {
        ...state,
        searchValue: action.searchValue,
        filteredPopulation: filterPopulation(state.population,
          action.searchValue, state.professionSelected),
      };
    case types.FILTER_POPULATION_BY_PROFESSION:
      return {
        ...state,
        professionSelected: action.profession,
        filteredPopulation: filterPopulation(state.population,
          state.searchValue, action.profession),
      };
    default:
      return state;
  }
};
