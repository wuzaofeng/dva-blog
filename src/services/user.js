import request from '../utils/request';

/**
 * 获取用户详情，用户列表
 * @param email(可选)
 * @returns {*}
 */
export function getUser({email = '', id = '' } = '') {
  return request(`/api/user?email=${email}&id=${id}`);
}
