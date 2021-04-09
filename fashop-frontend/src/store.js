import { createStore } from 'redux'
import { LoginReducer, initialState } from './reducers/LoginReducer'

export default createStore(
    LoginReducer,
    initialState,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  );