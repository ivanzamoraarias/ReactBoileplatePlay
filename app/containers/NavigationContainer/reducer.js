/*
 *
 * NavigationContainer reducer
 *
 * topics:[
    {
      name:'libraries',
      dewscription:'links to libs',
    },
    {
      name:'apps',
      dewscription:'links to apps',
    },
    {
      name:'news',
      dewscription:'links to news',
    },
  ],
 */

import { fromJS } from 'immutable';
import {
  REQUEST_TOPICS_SUCCEEDED,
  DEFAULT_ACTION,
} from './constants';

const initialState = fromJS({
  topics:[],
  
});

function navigationContainerReducer(state = initialState, action) {
  switch (action.type) {
    case REQUEST_TOPICS_SUCCEEDED:
      return state.set('topics', action.topics);
    case DEFAULT_ACTION:
      return state;
    default:
      return state;
  }
}

export default navigationContainerReducer;
