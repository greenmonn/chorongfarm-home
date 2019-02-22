const HtmlWebpackExternalsPlugin = require('html-webpack-externals-plugin');

module.exports = {
  css: {
    loaderOptions: {
      sass: {
        data: `
            @import "@/styles/common.scss";
          `,
      },
    },
  },
  configureWebpack: {
    plugins: [
      new HtmlWebpackExternalsPlugin({
        externals: [
          {
            module: 'font-awesome',
            entry: 'https://use.fontawesome.com/releases/v5.0.10/js/all.js',
            global: 'font-awesome',
          },
          {
            module: 'daum-map-api',
            entry:
              '//dapi.kakao.com/v2/maps/sdk.js?appkey=c1c962956ce1fc22660080992e45295a&libraries=clusterer',
            global: 'daum-map-api',
          },
          {
            module: 'daum-postcode-api',
            entry: 'http://dmaps.daum.net/map_js_init/postcode.v2.js',
            global: 'daum-postcode-api',
          },
        ],
      }),
    ],
  },
};
