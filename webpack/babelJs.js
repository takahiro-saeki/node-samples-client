export default {
    entry: './assets/js/common.js',
    output: {
      filename: './template/js/main.js'
    },
    module: {
      loaders: [
        {
          test: /\.js$/,
          loader: 'babel-loader',
          query: {
            presets: ['es2015'],
            plugins: ['transform-runtime']
          }
        }
      ]
    }
};
