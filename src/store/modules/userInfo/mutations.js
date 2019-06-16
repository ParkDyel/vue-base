import * as fn from './type';

const mutations = {
  [fn.SET_USER_NAME](state, $_str) {
    state.userName = $_str;
  },
};

export { mutations as default };
