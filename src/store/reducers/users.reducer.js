import { Set, Map } from "immutable";

import {
  USERS_LOADING,
  USERS_LOADING_FAILED,
  USERS_LOADED
} from 'src/store/actionTypes';

const initialState = Map({
  isLoading: true,
  errMsg: null,
  list: Set()
});

export default (state = initialState, action) => {
  switch (action.type) {
    case USERS_LOADING:
      return loading(state);
    case USERS_LOADING_FAILED:
      return fail(state, action.payload);
    case USERS_LOADED:
      return load(state, action.payload);

    default:
      return state;
  }
};

const loading = state => {
  return state.set('isLoading', true)
              .set('errMsg', null)
              .set('list', Set());
};

const fail = (state, message) => {
  return state.set('isLoading', false)
              .set('errMsg', message)
              .set('list', Set());
}

const load = (state, users) => {
  return state.set('isLoading', false)
              .set('errMsg', null)
              .set('list', Set(users));
}
