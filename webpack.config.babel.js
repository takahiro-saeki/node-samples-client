const postcssImport = require('postcss-import');
import webpackCss from './webpack/css';
import webpackJs from './webpack/babelJs';
export default [webpackJs, webpackCss]
