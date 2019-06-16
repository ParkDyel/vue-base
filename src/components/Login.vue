<template lang="pug">
v-dialog(class="dialog--login" width="50%" persistent transition="scale-transition" v-model="isLoginModal")
  v-card(dark)
    v-card-title
      span.headline Login
    v-card-text
      v-container(grid-list-md)
        v-layout(wrap)
          v-flex(xs12)
            v-text-field(class="form--id" label='* Email' required v-model='email')
          v-flex(xs12)
            v-text-field(class="form--pwd" label='* Password' type='password' required v-model='pw')
    v-alert(v-if="error" :value="true" color="warning" icon="priority_high" outline transition="scale-transition") Failed Login. check user email or password
    v-card-actions
      v-spacer
      v-btn(id="btnClose" color='white darken-2' flat @click='setLoginModal(false)') Close
      v-btn(id="btnSave" color='white darken-2' flat @click='login(email, pw)') Save
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
      error: false,
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
      this.$_restful_request('POST', 'login', { email: $_email, pw: $_pw })
        .then(res => {
          return new Promise(resolve => {
            resolve(this.setUserName(res.data));
          });
        })
        .then(res => {
          console.log(res);
          if (res) {
            this.setLoginModal(false);
          } else {
            this.error = true;
          }
        });
    },
  },
};
</script>
