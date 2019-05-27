export default {
  install(Vue, option) {
    const $_debug = option.debug;
    Vue.prototype.$_debug_isDebug = () => {
      return $_debug;
    };
    Vue.prototype.$_debug_console_log = (...args) => {
      if ($_debug) {
        return console.log(args);
      }
    };
  },
};
