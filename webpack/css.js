const postcssImport = require('postcss-import');
export default {
  entry: './assets/css/style.css',
  output: {
    filename: './template/js/style.js'
  },
  module: {
    loaders: [
      {
        test:   /\.css$/,
        loader: "style-loader!css-loader!postcss-loader"
      }
    ]
  },
  postcss: webpack => {
    return [
      require('autoprefixer'),
      require('precss'),
      postcssImport({
        addDependencyTo: webpack
      })
    ];
  }
}
