import request from '../utils/request';

/**
 * 获取文章分类
 * @param email(可选)
 * @returns {*}
 */
export function getCategories() {
  return request(`/api/categories`);
}

export function createCategories(data) {
  return request('/api/categories', {
    body: data,
    method: 'POST'
  })
}

export function updateCategories(data) {
  return request('/api/categories', {
    body: data,
    method: 'PUT'
  })
}

export function delCategories(data) {
  return request('/api/categories', {
    body: data,
    method: 'DELETE'
  })
}
