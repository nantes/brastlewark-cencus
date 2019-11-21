import types from '../actions/types';

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
        filteredPopulation: action.payload.Brastlewark,
        loading: false,

      };
    case types.FETCH_POPULATION_ERROR:
      return state;
    default:
      return state;
  }
};
