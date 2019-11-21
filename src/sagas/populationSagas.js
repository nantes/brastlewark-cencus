import { put, call, takeEvery } from 'redux-saga/effects';
import types from '../actions/types';
import { fetchPopulationSuccess, fetchPopulationError } from '../actions';
import fetch from '../api';

function* fetchPopulation() {
  try {
    const payload = yield call(fetch);
    yield put(fetchPopulationSuccess(payload));
  } catch (error) {
    yield put(fetchPopulationError(error));
  }
}
export const watchFetchPopulation = takeEvery(types.FETCH_POPULATION, fetchPopulation);

export default watchFetchPopulation;
