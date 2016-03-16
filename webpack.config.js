module.exports = {
  entry: './src/app.js',
  output: {
    filename: './dist/bundle.js'
  },
  module: {
  	loaders: [{ test: /\.hbs$/, loader: 'handlebars-loader' }]
  }
};