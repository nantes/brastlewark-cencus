import types from '../actions/types';
import searchPopulationByName from '../selectors';

const initialState = {
  population: [],
  filteredPopulation: [],
  searchValue: '',
  loading: false,
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
        filteredPopulation: searchPopulationByName(action.payload.Brastlewark, state.searchValue),
        loading: false,

      };
    case types.FETCH_POPULATION_ERROR:
      return state;
    case types.FILTER_POPULATION_BY_NAME:
      return {
        ...state,
        searchValue: action.searchValue,
        filteredPopulation: searchPopulationByName(state.population, action.searchValue),
      };
    default:
      return state;
  }
};
