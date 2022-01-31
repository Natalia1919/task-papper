import {createStore, compose} from 'redux';

import rootReducer from './rootReducer';


const store = compose(
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)(createStore)(rootReducer);


export default store;