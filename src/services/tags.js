import request from '../utils/request';
const url = '/api/tags'

/**
 * 获取标签
 * @returns {*}
 */
export function getTags() {
  return request(url);
}

/**
 * 添加标签
 * @param data
 * @returns {*}
 */
export function createTags(data) {
  return request(url, {
    body: data,
    method: 'POST'
  })
}

/**
 * 修改标签
 * @param data
 * @returns {*}
 */
export function updateTags(data) {
  return request(url, {
    body: data,
    method: 'PUT'
  })
}

/**
 * 删除标签
 * @param data
 * @returns {*}
 */
export function delTags(data) {
  return request(url, {
    body: data,
    method: 'DELETE'
  })
}
