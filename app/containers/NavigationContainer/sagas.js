// import { take, call, put, select } from 'redux-saga/effects';
import {REQUEST_TOPICS} from './constants';
import { takeLatest } from 'redux-saga';
import { call, put } from 'redux-saga/effects';
import { requestTopicsSucceded , requestTopicsFailed} from './actions';

export function fetchTopicsFromServer(){
  return fetch('http://localhost:3000/api/topics ')
  .then(response => response.json());
}

function* fetchTopics(){
  try{
    const topics = yield call(fetchTopicsFromServer);
    yield put(requestTopicsSucceded(topics));
    console.log('TOPICS FROM THE SERVER :D');
  }
  catch(error){
    yield put(requestTopicsFailed(error.message));
  }
 
}

// Individual exports for testing
export function* fetchTopicsSaga() {
  yield* takeLatest(REQUEST_TOPICS, fetchTopics);
}

// All sagas to be loaded
export default [
  fetchTopicsSaga,
];
