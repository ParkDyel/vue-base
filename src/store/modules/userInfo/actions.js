import * as fn from './types';

const actions = {
  [fn.SET_USER_NAME]({ commit }, payload) {
    if (payload.err == true) {
      return false;
    } else {
      commit(actions.SET_USER_NAME, payload.name);
      return false;
    }
  },
};

export { actions as default };
