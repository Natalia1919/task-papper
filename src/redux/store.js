import {createStore, compose, applyMiddleware} from 'redux';
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage';
import createSagaMiddleware from 'redux-saga';

import rootReducer from './rootReducer';
import rootSaga from './rootSaga';

//localStorage
const persistConfig = {
  key: 'tasks',
  storage,
}

const persistedReducer = persistReducer(persistConfig, rootReducer);

//middlewares

const sagaMiddleware = createSagaMiddleware();
const middlewares = [sagaMiddleware];

export const store = compose(
  applyMiddleware(...middlewares),
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)(createStore)(persistedReducer);

sagaMiddleware.run(rootSaga)

export const persistor = persistStore(store);

export default {store, persistor};