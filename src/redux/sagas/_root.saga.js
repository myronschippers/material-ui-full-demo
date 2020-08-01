import { takeLatest } from 'redux-saga/effects';

// SAGAS
import getCreatures from './getCreatures.saga';

function* rootSaga() {
  yield takeLatest('GET_CREATURES', getCreatures);
}

export default rootSaga;