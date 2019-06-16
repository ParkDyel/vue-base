import * as fn from './type';

const actions = {
  [fn.SET_USER_NAME]({ commit }, payload) {
    if (payload.err == false) {
      commit(fn.SET_USER_NAME, payload.name);
      return true;
    } else {
      return false;
    }
  },
};

export { actions as default };
