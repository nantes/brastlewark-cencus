import { all } from 'redux-saga/effects';
import { watchFetchPopulation } from './populationSagas';

function* rootSaga() {
  yield all([watchFetchPopulation]);
}
export default rootSaga;
