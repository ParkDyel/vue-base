import Vue from 'vue';
import Vuex from 'vuex';
import createLogger from 'vuex/dist/logger';
import createPersistedState from 'vuex-persistedstate';

import settings from './modules/settings';
import userInfo from './modules/userInfo';

Vue.use(Vuex);

const debug = process.env.NODE_ENV !== 'production';

export default new Vuex.Store({
  modules: {
    settings,
    userInfo,
  },
  state: {},
  mutations: {},
  actions: {},
  plugins: [
    createPersistedState({
      key: 'vuex',
      storage: {
        getItem: key => localStorage.getItem(key),
        setItem: (key, value) => localStorage.setItem(key, value),
        removeItem: key => localStorage.removeItem(key),
      },
    }),
    debug
      ? () => {
          createLogger();
        }
      : () => {
          return null;
        },
  ],
});
