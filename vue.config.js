let $_port = 8989;

module.exports = {
  publicPath: '/',
  lintOnSave: false,
  productionSourceMap: false,
  pluginOptions: {
    webpackBundleAnalyzer: {
      openAnalyzer: false,
      analyzerPort: parseInt('1' + $_port),
    },
  },
  devServer: {
    open: true,
    host: '0.0.0.0',
    port: $_port, // CHANGE YOUR PORT HERE!
    https: false,
    hotOnly: true,
  },
};
