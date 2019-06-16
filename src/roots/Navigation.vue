<template lang="pug">
v-navigation-drawer(id="navi" permanent :temporary='!isFold' fixed clipped dark disable-route-watcher value :mini-variant='isFold')
  v-toolbar(flat='')
    v-list
      v-list-tile.title(@click='toggleMenu(!isFold)')
        v-list-tile-action
          v-icon {{ 'toc' }}
        v-list-tile-content
          v-list-tile-title {{ userName }}
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
const vuexModuleUserInfos = createNamespacedHelpers('userInfo');

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
    ...vuexModuleUserInfos.mapState({
      userName: state => state.userName,
    }),
  },
  watch: {
    userName($_new) {
      if ($_new !== undefined) {
        const $_menu = this.menus.find(json => {
          return json.id == 'account';
        });
        this.$set($_menu, 'title', 'logout');
      }
    },
  },
  methods: {
    ...vuexModuleSettings.mapMutations({
      toggleMenu: 'setFoldMainMenu',
      toggleLoginModal: 'setLoginModal',
    }),
    ...vuexModuleUserInfos.mapMutations({
      setUserName: 'SET_USER_NAME',
    }),
    logOut() {
      return new Promise(resolve => {
        resolve(this.setUserName(undefined));
      });
    },
    clickMenu($_name) {
      if ($_name == 'account') {
        if (this.userName === undefined) {
          this.toggleLoginModal(true);
        } else {
          this.logOut().then(() => {
            return this.goToName('home');
          });
        }
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
