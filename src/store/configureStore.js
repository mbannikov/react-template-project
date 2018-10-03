import { createStore, combineReducers, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';

import usersReducer from 'src/store/reducers/users.reducer';

const rootReducer = combineReducers({
  users: usersReducer,
});

export default function configureStore(initialState) {
  return createStore(
    rootReducer, 
    initialState, 
    composeWithDevTools(applyMiddleware(thunk)),
  );
}
