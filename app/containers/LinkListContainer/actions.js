/*
 *
 * LinkListContainer actions
 *
 */

import {
  DEFAULT_ACTION,
  REQUEST_LINKS_SUCCEDED,
  REQUEST_LINKS_FAILED,
} from './constants';

export function defaultAction() {
  return {
    type: DEFAULT_ACTION,
  };
}

export function requestLinksSucceded(links){
  return{
    type: REQUEST_LINKS_SUCCEDED,
    links,
  }
}

export function requestLinksFailed(message){
  return{
    type: REQUEST_LINKS_FAILED,
    message,
  }
}