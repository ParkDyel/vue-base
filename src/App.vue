<template lang="pug">
v-app
  left-menu
  v-toolbar(app='')
  v-content
    v-container(fluid='')
      router-view
  v-footer(app='')
</template>

<script>
import leftMenu from '@/roots/Navigation';

export default {
  name: 'App',
  components: {
    'left-menu': leftMenu,
  },
  data() {
    return {};
  },
  created() {
    if (process.env.VUE_APP_DEBUG) {
      window.Vue = this;
    }
  },
  methods: {},
};
</script>
