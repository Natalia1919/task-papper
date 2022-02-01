import {all} from 'redux-saga/effects';

import tasksSaga from './tasks/tasksSaga';

export default function* rootSaga(){
  yield all([
    tasksSaga()
  ])
}