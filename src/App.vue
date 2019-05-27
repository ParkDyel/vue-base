<template lang="pug">
v-app
  left-menu
  tool-bar
  v-content
    v-container(fluid='')
      router-view
  footer-bar
</template>

<script>
import leftMenu from '@/roots/Navigation';
import toolBar from '@/roots/ToolBar';
import footerBar from '@/roots/FooterBar';

export default {
  name: 'App',
  components: {
    'left-menu': leftMenu,
    'tool-bar': toolBar,
    'footer-bar': footerBar,
  },
  data() {
    return {};
  },
  created() {
    if (process.env.VUE_APP_DEBUG) {
      window.Vue = this;
    }
  },
};
</script>

<style>
.v-content {
  margin-left: 80px;
}
</style>
