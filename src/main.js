import Vue from 'vue';
import './plugins/vuetify';
import App from './App.vue';
import router from './router';
import store from './store';
import './registerServiceWorker';

import PluginDebugTool from '@/plugins/debugTool.js';
import PluginServerAPI from '@/plugins/serverLayer.js';

Vue.config.productionTip = false;

Vue.use(PluginDebugTool, {
  debug: process.env.VUE_APP_DEBUG,
});
Vue.use(PluginServerAPI);

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app');
