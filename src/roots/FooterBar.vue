<template lang="pug">
v-footer(dark height="auto")
  v-layout(row)
    v-flex(dark py-2 text-xs-center xs3)
    v-flex(dark py-2 text-xs-center xs6) &copy; 
      strong DYEL
    v-flex(dark py-2 px-4 text-xs-right xs3) {{ appVer }}
</template>

<script>
export default {
  name: 'footer-bar',
  data() {
    return {
      appVer: JSON.parse(
        unescape(process.env.PACKAGE_JSON || '%7Bversion%3A0%7D'),
      ).version,
    };
  },
};
</script>

<style scoped>
footer {
  margin-left: 80px;
}
</style>
