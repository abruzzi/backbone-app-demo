module.exports = {
  entry: './src/app.js',
  output: {
    filename: './dist/bundle.js'
  },
  loaders: [
    { test: /\.hbs$/, loader: "handlebars-loader" }
  ]
};