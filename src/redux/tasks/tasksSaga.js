import {put, takeEvery, delay} from 'redux-saga/effects';



function* deleteMessage(){
  yield delay(3000);
  yield put({type: 'DELETE_MESSAGE', message: null})
}

export default function* tasksSaga(){
  yield takeEvery('SET_MESSAGE', deleteMessage)
}