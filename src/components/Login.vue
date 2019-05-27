<template lang="pug">
v-dialog(width="50%" persistent v-model="isLoginModal")
  v-card(dark)
    v-card-title
      span.headline Login
    v-card-text
      v-container(grid-list-md)
        v-layout(wrap)
          v-flex(xs12)
            v-text-field(label='* Email' required)
          v-flex(xs12)
            v-text-field(label='* Password' type='password' required)
    v-card-actions
      v-spacer
      v-btn(color='white darken-2' flat @click='setLoginModal(false)') Close
      v-btn(color='white darken-2' flat @click='setLoginModal(false)') Save
</template>

<script>
import { createNamespacedHelpers } from 'vuex';

const vuexModuleSettings = createNamespacedHelpers('settings');

export default {
  computed: {
    ...vuexModuleSettings.mapState(['isLoginModal']),
  },
  methods: {
    ...vuexModuleSettings.mapMutations(['setLoginModal']),
  },
};
</script>
