module.exports = {

  entry: './client/app.js',

  output: {
    filename: 'bundle.js',
  },

  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,

        include: /client/,
        loader: 'babel-loader',
      },
    ],
  },

  // This lets us debug our react code in chrome dev tools. Errors will have lines and file names
  // Without this the console says all errors are coming from just coming from bundle.js
  // For different options: https://webpack.js.org/configuration/devtool/#devtool
  devtool: 'cheap-module-eval-source-map',
};
