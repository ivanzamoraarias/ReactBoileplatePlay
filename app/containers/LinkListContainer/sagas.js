// import { take, call, put, select } from 'redux-saga/effects';
import { call, put } from 'redux-saga/effects'; //  do comething with side effects, put dispatch actions
import { takeLatest } from 'redux-saga';  // subscribe to the server
import { SELECT_TOPIC } from '../NavigationContainer/constants';
import { requestLinksSucceded, requestLinksFailed } from './actions';


function fetchLinksFromServer(topic) {
  return fetch(`http://localhost:3000/api/topics/${topic.name}/links`)
    .then(response => response.json());
}

function* fetchLinks(action) { 
  try {
    const links = yield call(fetchLinksFromServer, action.topic);
    yield put(requestLinksSucceded(links));
  }catch(error) {
    yield put(requestLinksFailed(error.message));
  }
}
// Individual exports for testing
export function* defaultSaga() {
  yield* takeLatest(SELECT_TOPIC, fetchLinks);
  return;
}

// All sagas to be loaded
export default [
  defaultSaga,
];
