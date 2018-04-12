// import { take, call, put, select } from 'redux-saga/effects';
import {REQUEST_TOPICS} from './constants'
import { takeLatest } from 'redux-saga'
// Individual exports for testing
export function* fetchTopicsSaga() {
  yield* takeLatest(REQUEST_TOPICS, () => {console.log('LOgged by Saga ! :o ')})
}

// All sagas to be loaded
export default [
  fetchTopicsSaga,
];
