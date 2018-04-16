/*
 *
 * LinkListContainer reducer
 * links:[
    {
      description:'Link Description',
      url: 'https://github.com/facebook/react',
      topicName:'links',
      id: 'fake',
    }
  ],
 */

import { fromJS } from 'immutable';
import {
  DEFAULT_ACTION,
  REQUEST_LINKS_SUCCEDED,
} from './constants';

const initialState = fromJS({
  links: [],
});

function linkListContainerReducer(state = initialState, action) {
  switch (action.type) {
    case REQUEST_LINKS_SUCCEDED:
      return state.set('links', action.links);
    case DEFAULT_ACTION:
      return state;
    default:
      return state;
  }
}

export default linkListContainerReducer;
