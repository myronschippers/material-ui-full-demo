import { takeLatest } from 'redux-saga/effects';

// SAGAS
import getCreatures from './getCreatures.saga';
import getCreatureDetails from './getCreatureDetails.saga';

function* rootSaga() {
  yield takeLatest('GET_CREATURES', getCreatures);
  yield takeLatest('GET_CREATURE_DETAILS', getCreatureDetails);
}

export default rootSaga;