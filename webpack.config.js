
const path = require('path');
const { NODE_ENV } = process.env;

module.exports = {
  entry: {
    'index': './src/index.js',
    'is-array/is-array': './src/is-array.js',
    'is-cep/is-cep': './src/is-cep.js',
    'is-overflown/is-overflown': './src/is-overflown.js',
    'is-cpf/is-cpf': './src/is-cpf.js',
    'is-dateabove/is-dateabove': './src/is-dateabove.js',
    'is-datebelow/is-datebelow': './src/is-datebelow.js',
    'is-date/is-date': './src/is-date.js',
    'is-datebetween/is-datebetween': './src/is-datebetween.js',
    'is-email/is-email': './src/is-email.js',
    'is-emptystring/is-emptystring': './src/is-emptystring.js',
    'is-function/is-function': './src/is-function.js',
    'is-imgfile/is-imgfile': './src/is-imgfile.js',
    'is-number/is-number': './src/is-number.js',
    'is-phone/is-phone': './src/is-phone.js',
    'is-string/is-string': './src/is-string.js',
  },
  output: {
    // library: 'Jo-Validate',
    // libraryTarget: 'amd',
    path: path.resolve(__dirname, 'dist'),
  },
  mode: NODE_ENV || 'development',
  module: {
    rules: [
      // {
      //   test: /\.js/,
      //   exclude: [/\.test.js/, /node_modules/],
      //   loader: 'eslint-loader'
      // },
      {
        test: /\.js/,
        exclude: [/\.test.js/, /node_modules/],
        loader: 'ts-loader'
      }
    ]
  }
}