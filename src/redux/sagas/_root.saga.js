import { takeLatest } from 'redux-saga/effects';

// SAGAS
import getCreatures from './getCreatures.saga';
import getCreatureDetails from './getCreatureDetails.saga';
import updateCreature from './updateCreature.saga';
import getAllAttributes from './getAllAttributes.saga';

function* rootSaga() {
  yield takeLatest('GET_CREATURES', getCreatures);
  yield takeLatest('GET_CREATURE_DETAILS', getCreatureDetails);
  yield takeLatest('UPDATE_CREATURE_DETAILS', updateCreature);
  yield takeLatest('GET_ALL_ATTRIBUTES', getAllAttributes);
}

export default rootSaga;