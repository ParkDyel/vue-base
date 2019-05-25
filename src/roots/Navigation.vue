<template lang="pug">
v-navigation-drawer(permanent temporary fixed clipped dark disable-route-watcher value :mini-variant='isFold' @click='toggleMenu(!isFold)')
  v-toolbar(flat='' @click='toggleMenu(!isFold)')
    v-list
      v-list-tile.title
        v-list-tile-action
          v-icon {{ 'home' }}
        v-list-tile-content
          v-list-tile-title My App
  v-divider
  v-list.pt-0(dense='')
    v-list-tile(v-for='menu in menus' :key='menu.title' @click.stop='toggleMenu(!isFold)')
      v-list-tile-action
        v-icon {{ menu.icon }}
      v-list-tile-content
        v-list-tile-title {{ menu.title }}
</template>

<script>
import { createNamespacedHelpers } from 'vuex';

const { mapState, mapMutations } = createNamespacedHelpers('settings');

export default {
  data() {
    return {
      menus: [
        { title: 'Home', icon: 'dashboard' },
        { title: 'About', icon: 'question_answer' },
        { title: 'Account', icon: 'account_box' },
      ],
    };
  },
  computed: {
    ...mapState({
      isFold: state => state.isFoldMainMenu,
    }),
  },
  // created() {
  //   this.$store.settings.state
  // },
  methods: {
    ...mapMutations({
      toggleMenu: 'setFoldMainMenu',
    }),
  },
};
</script>

<style lang="scss" scoped></style>
