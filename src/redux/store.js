import {createStore, compose} from 'redux';
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'

import rootReducer from './rootReducer';


const persistConfig = {
  key: 'tasks',
  storage,
}

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = compose(
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)(createStore)(persistedReducer);



export const persistor = persistStore(store);

export default {store, persistor};