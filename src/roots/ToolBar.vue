<template lang="pug">
v-toolbar(app dark color='darken-2' scroll-target='#scrolling-techniques')
  v-toolbar-title.white--text Title
  v-spacer
  v-btn(icon='')
    v-icon search
  v-btn(icon='')
    v-icon apps
  v-btn(icon='')
    v-icon refresh
  v-btn(icon='')
    v-icon more_vert
</template>

<script>
export default {
  name: 'tool-bar',
};
</script>

<style scoped>
nav {
  padding-left: 80px !important;
}
</style>
