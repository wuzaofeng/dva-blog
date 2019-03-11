import fetch from 'dva/fetch';
import { CODE } from '../config'

function parseJSON(response) {
  return response.json();
}

function checkStatus(response) {
  if (response.status >= 200 && response.status < 300) {
    return response;
  }

  const error = new Error(response.statusText);
  error.response = response;
  throw error;
}

function checkCode(response) {
  if (response.code === CODE.SUCCESS) {
    return response;
  }

  const error = new Error(response.message);
  error.response = response;
  throw error;
}

/**
 * Requests a URL, returning a promise.
 *
 * @param  {string} url       The URL we want to request
 * @param  {object} [options] The options we want to pass to "fetch"
 * @return {object}           An object containing either "data" or "err"
 */
export default function request(url, opt = {}) {
  const options = {
    ...opt
  }
  if (opt && opt.body) {
    options.body = JSON.stringify(opt.body)

    console.log(options)
  }
  return fetch(url, {
    headers: {
      'Content-Type': 'application/json'
    },
    ...options
    })
    .then(checkStatus)
    .then(parseJSON)
    .then(checkCode)
    .then(data => ({ data }))
    .catch(err => {
      return { err }
    });
}
