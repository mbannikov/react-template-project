import {
  USERS_LOADING,
  USERS_LOADING_FAILED,
  USERS_LOADED
} from 'src/store/actionTypes';

const USERS_API_URL = 'https://jsonplaceholder.typicode.com/users'

export const loading = () => ({
  type: USERS_LOADING
});

export const loadingFailed = errMsg => ({
    type: USERS_LOADING_FAILED,
    payload: errMsg
});

export const loaded = users => ({
    type: USERS_LOADED,
    payload: users
});

export const fetchUsers = () => dispatch => {
  dispatch(loading());

  return fetch(USERS_API_URL)
    .then(
      response => {
        if (response.ok) {
          return response;
        } else {
          let error = new Error(`Error ${response.status}: ${response.statusText}`);
          error.response = response;
          throw error;
        }
      }, 
      error => {
        var errmess = new Error(error.message);
        throw errmess;
      }
    )
    .then(response => response.json())
    .then(users => new Promise(resolve => setTimeout(() => resolve(users), 1500))) // delay for showing loading
    .then(users => dispatch(loaded(users)))
    .catch(error => dispatch(loadingFailed(error.message)));
}
