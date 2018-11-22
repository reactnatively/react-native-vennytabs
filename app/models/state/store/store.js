import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import userReducer from 'app/models/state/reducers/user';

//
export default createStore(
  userReducer,
  applyMiddleware(thunk),
  //window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
