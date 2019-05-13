import request from '../utils/request';

const url = '/api/categories'
/**
 * 获取文章分类
 * @param email(可选)
 * @returns {*}
 */
export function getCategories() {
  return request(url);
}

/**
 * 添加文章分类
 * @param data
 * @returns {*}
 */
export function createCategories(data) {
  return request(url, {
    body: data,
    method: 'POST'
  })
}

/**
 * 修改文章分类
 * @param data
 * @returns {*}
 */
export function updateCategories(data) {
  return request(url, {
    body: data,
    method: 'PUT'
  })
}

/**
 * 删除文章分类
 * @param data
 * @returns {*}
 */
export function delCategories(data) {
  return request(url, {
    body: data,
    method: 'DELETE'
  })
}
