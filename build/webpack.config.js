const path = require('path');
const presets  = [
    ['@babel/preset-env',
    {
        "targets": {
          "node": "current"
        }
    }],
//    "@babel/react",
    "@babel/preset-react"
];
module.exports = {
  mode   : "development",
  devtool: "inline-source-map",
  entry  : {
    "sample": './src/sample/index.js',
  },
  output : {
    path    : `${__dirname}/dist`,
    filename: '[name].bundle.js'
  },
  resolve: {
    alias: {
      '@common': path.resolve(__dirname, 'src/common')
    }
  },
  watch: true,
  watchOptions: {
    aggregateTimeout: 300,
    poll: 1000
  },
  module : {
    rules: [
      {
        test: /\.js$/,
        use : [
          {
            loader : 'babel-loader',
            options: {
              presets: presets,
              "plugins": [
                "@babel/plugin-proposal-class-properties"
              ]
            }
          }
        ]
      }
    ]
  }
};
