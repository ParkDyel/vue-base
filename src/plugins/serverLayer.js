import request from '@/api/restful.js';

export default {
  install(Vue) {
    Vue.prototype.$_restful_request = request;
  },
};
