import request from '../utils/request';

const url = '/api/articles'
/**
 * 获取文章
 * @param email(可选)
 * @returns {*}
 */
export function getArticles() {
  return request(url);
}

/**
 * 添加文章
 * @param data
 * @returns {*}
 */
export function createArticles(data) {
  return request(url, {
    body: data,
    method: 'POST'
  })
}

/**
 * 修改文章
 * @param data
 * @returns {*}
 */
export function updateArticles(data) {
  return request(url, {
    body: data,
    method: 'PUT'
  })
}

/**
 * 删除文章
 * @param data
 * @returns {*}
 */
export function delArticles(data) {
  return request(url, {
    body: data,
    method: 'DELETE'
  })
}
