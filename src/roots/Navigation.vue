<template lang="pug">
v-navigation-drawer(permanent :temporary='!isFold' fixed clipped dark disable-route-watcher value :mini-variant='isFold')
  v-toolbar(flat='')
    v-list
      v-list-tile.title(@click='toggleMenu(!isFold)')
        v-list-tile-action
          v-icon {{ 'toc' }}
  v-divider
  v-list.pt-0(dense='')
    v-list-tile(v-for='menu in menus' :key='menu.title' :id='menu.id' @click.stop='clickMenu(menu.id)')
      v-list-tile-action
        v-icon {{ menu.icon }}
      v-list-tile-content
        v-list-tile-title {{ menu.title }}
</template>

<script>
import { createNamespacedHelpers } from 'vuex';

const vuexModuleSettings = createNamespacedHelpers('settings');

export default {
  name: 'navigation',
  data() {
    return {
      menus: [
        { id: 'home', title: 'Home', icon: 'dashboard' },
        { id: 'about', title: 'About', icon: 'question_answer' },
        { id: 'account', title: 'Account', icon: 'account_box' },
      ],
    };
  },
  computed: {
    ...vuexModuleSettings.mapState({
      isFold: state => state.isFoldMainMenu,
    }),
  },
  methods: {
    ...vuexModuleSettings.mapMutations({
      toggleMenu: 'setFoldMainMenu',
      toggleLoginModal: 'setLoginModal',
    }),
    clickMenu($_name) {
      if ($_name == 'account') {
        this.toggleLoginModal(true);
      } else {
        return this.goToName($_name);
      }
    },
    goToName($_name) {
      this.$_debug_console_log(`name : ${$_name}`);
      this.$router.push({
        name: $_name,
      });
    },
  },
};
</script>

<style lang="scss" scoped></style>
