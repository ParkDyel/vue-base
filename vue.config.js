let $_port = 8989;
const webpack = require('webpack');
const WebpackAssetsManifest = require('webpack-assets-manifest');

module.exports = {
  publicPath: '/',
  lintOnSave: false,
  productionSourceMap: false,
  configureWebpack: config => {
    if (process.env.NODE_ENV == 'production') {
      // mutate config for production...
    } else {
      // mutate for development...
    }
    config.plugins.push(
      new WebpackAssetsManifest({
        output: 'build_hash.json',
        merge: 'customize',
        customize(entry, original, manifest, asset) {
          if (manifest.isMerging) {
            // Do something
            console.log(
              `${entry} : old ${original}, mani ${manifest}, asset: ${asset}`,
            );
          }
        },
      }),
    );
    config.plugins.push(
      new webpack.DefinePlugin({
        'process.env': {
          PACKAGE_JSON:
            '"' + escape(JSON.stringify(require('./package.json'))) + '"',
        },
      }),
    );
    config.output.filename = 'js/[name].[hash:6].js';
    // config.output.chunkFilename = 'js/[name].[chunkhash:6].js'
  },
  // css: {
  //   extract: {
  //     filename: 'css/[name].[contenthash:6].css',
  //   },
  // },
  pluginOptions: {
    webpackBundleAnalyzer: {
      openAnalyzer: false,
      analyzerPort: parseInt('1' + $_port),
    },
  },
  devServer: {
    open: true,
    host: '127.0.0.1',
    port: $_port, // CHANGE YOUR PORT HERE!
    https: false,
    hotOnly: true,
  },
};
