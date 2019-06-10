<template lang="pug">
v-dialog(width="50%" persistent v-model="isLoginModal")
  v-card(dark)
    v-card-title
      span.headline Login
    v-card-text
      v-container(grid-list-md)
        v-layout(wrap)
          v-flex(xs12)
            v-text-field(label='* Email' required v-model='email')
          v-flex(xs12)
            v-text-field(label='* Password' type='password' required v-model='pw')
    v-card-actions
      v-spacer
      v-btn(color='white darken-2' flat @click='setLoginModal(false)') Close
      v-btn(color='white darken-2' flat @click='login(email, pw)') Save
</template>

<script>
import { createNamespacedHelpers } from 'vuex';

const vuexModuleSettings = createNamespacedHelpers('settings');
const vuexModuleUser = createNamespacedHelpers('userInfo');

export default {
  data() {
    return {
      email: '',
      pw: '',
    };
  },
  computed: {
    ...vuexModuleSettings.mapState(['isLoginModal']),
  },
  methods: {
    ...vuexModuleSettings.mapMutations(['setLoginModal']),
    ...vuexModuleUser.mapActions({ setUserName: 'SET_USER_NAME' }),
    login($_email, $_pw) {
      this.$_debug_console_log('ID : ', $_email, 'PW : ', $_pw);
      this.request('POST', 'login', { email: $_email, pw: $_pw })
        .then(this.setUserName)
        .then(res => {
          if (res) {
            this.setLoginModal(false);
          } else {
            // alert
          }
        });
    },
  },
};
</script>
