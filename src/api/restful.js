import axios from 'axios';

axios.defaults.baseURL = process.env.VUE_APP_REST_SERVER_IP;

export const METHODS = {
  GET: get,
  PUT: 'put',
  POST: 'post',
  DEL: 'delete',
};

export default function request($_methods, $_url, $_param) {
  if (METHODS.hasOwnProperty($_methods)) {
    // return get($_url, $_param);
    return METHODS[$_methods]($_url, $_param).then(res => {
      return new Promise(resolve => {
        if (res.status == '200') {
          resolve(res);
        } else {
          resolve({
            status: res.status,
            err: true,
          });
        }
      });
    });
  } else {
    return new Promise(resolve => {
      resolve({
        status: 400,
        err: true,
      });
    });
  }
}

function get($_url, $_param = {}) {
  let url = $_url;
  if ($_param.hasOwnProperty('root')) {
    url = url + '/' + $_param.root;
    delete $_param.root;
  }
  return axios.get(url, $_param);
}
