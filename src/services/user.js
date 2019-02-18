import request from '../utils/request';

/**
 * 获取用户详情，用户列表
 * @param email(可选)
 * @returns {*}
 */
export function getUser({email = '', id = '' } = '') {
  return request(`/api/user?email=${email}&id=${id}`);
}

export function createUser(data) {
  return request('/api/user', {
    body: data,
    method: 'POST'
  })
}

export function updateUser(data) {
  return request('/api/user', {
    body: data,
    method: 'PUT'
  })
}

export function delUser(data) {
  return request('/api/user', {
    body: data,
    method: 'DELETE'
  })
}
