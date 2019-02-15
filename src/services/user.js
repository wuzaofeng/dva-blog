import request from '../utils/request';

export function getUser(email = '') {
  return request(`/api/user?email=${email}`);
}
