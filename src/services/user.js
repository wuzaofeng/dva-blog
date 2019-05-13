import request from '../utils/request';

const url = '/api/user'
/**
 * 获取用户详情，用户列表
 * @param email(可选)
 * @returns {*}
 */
export function getUser({email = '', id = '' } = '') {
  return request(`${url}?email=${email}&id=${id}`);
}

/**
 * 添加用户
 * @param data
 * @returns {*}
 */
export function createUser(data) {
  return request(url, {
    body: data,
    method: 'POST'
  })
}

/**
 * 修改用户
 * @param data
 * @returns {*}
 */
export function updateUser(data) {
  return request(url, {
    body: data,
    method: 'PUT'
  })
}

/**
 * 删除用户
 * @param data
 * @returns {*}
 */
export function delUser(data) {
  return request(url, {
    body: data,
    method: 'DELETE'
  })
}
