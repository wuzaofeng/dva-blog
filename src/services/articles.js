import request from '../utils/request';

export function getArticles() {
  return request('/api/articles');
}