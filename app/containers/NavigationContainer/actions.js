/*
 *
 * NavigationContainer actions
 *
 */

import {
  DEFAULT_ACTION,
  REQUEST_TOPICS,
  REQUEST_TOPICS_SUCCEEDED,
  REQUEST_TOPICS_FAILED,
  SELECT_TOPIC,
} from './constants';

export function defaultAction() {
  return {
    type: DEFAULT_ACTION,
  };
}

export function requestTopics() {
  return {
    type: REQUEST_TOPICS,
  };
}

export function requestTopicsSucceded(topics) {
  return {
    type: REQUEST_TOPICS_SUCCEEDED,
    topics,
  };
}

export function requestTopicsFailed(message) {
  return {
    type: REQUEST_TOPICS_FAILED,
    message,
  };
}

export function selectTopic(topic) {
  console.log("HOLA");
  return {
    type: SELECT_TOPIC,
    topic,
  };
}
