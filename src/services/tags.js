import request from '../utils/request';

export function getTags() {
  return request(`/api/tags`);
}

export function createTags(data) {
  return request('/api/tags', {
    body: data,
    method: 'POST'
  })
}

export function updateTags(data) {
  return request('/api/tags', {
    body: data,
    method: 'PUT'
  })
}

export function delTags(data) {
  return request('/api/tags', {
    body: data,
    method: 'DELETE'
  })
}