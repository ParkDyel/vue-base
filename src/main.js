import Vue from 'vue';
import './plugins/vuetify';
import App from './App.vue';
import router from './router';
import store from './store';

import PluginDebugTool from '@/plugins/debugTool.js';
import './registerServiceWorker'

Vue.config.productionTip = false;

Vue.use(PluginDebugTool, {
  debug: process.env.VUE_APP_DEBUG,
});

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app');
