<template lang="pug">
v-app(ref="root")
  left-menu
  tool-bar
  v-content
    v-container(fluid='')
      router-view
      login-modal(v-if="isLoginModal")
  footer-bar
</template>

<script>
import { createNamespacedHelpers } from 'vuex';

import leftMenu from '@/roots/Navigation';
import toolBar from '@/roots/ToolBar';
import footerBar from '@/roots/FooterBar';
import LoginModal from '@/components/Login';

const vuexModuleSettings = createNamespacedHelpers('settings');

export default {
  name: 'App',
  components: {
    'left-menu': leftMenu,
    'tool-bar': toolBar,
    'footer-bar': footerBar,
    'login-modal': LoginModal,
  },
  computed: {
    ...vuexModuleSettings.mapState(['isLoginModal']),
  },
  created() {
    if (process.env.VUE_APP_DEBUG) {
      window.Vue = this;
    }
  },
  mounted() {},
};
</script>

<style>
.v-content {
  margin-left: 80px;
}
</style>
