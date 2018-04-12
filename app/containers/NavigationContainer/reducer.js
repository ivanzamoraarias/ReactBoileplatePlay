/*
 *
 * NavigationContainer reducer
 *
 */

import { fromJS } from 'immutable';
import {
  DEFAULT_ACTION,
} from './constants';

const initialState = fromJS({
  topics:[
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
});

function navigationContainerReducer(state = initialState, action) {
  switch (action.type) {
    case DEFAULT_ACTION:
      return state;
    default:
      return state;
  }
}

export default navigationContainerReducer;
