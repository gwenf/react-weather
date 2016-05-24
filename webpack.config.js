module.exports = {
  // devtool: 'inline-source-map',
  devtool: 'cheap-module-eval-source-map',
  entry: './app/app.jsx',
  output: {
    path: __dirname,
    filename: './public/bundle.js',
    sourceMapFilename: "./public/bundle.map"
  },
  resolve: {
    root: __dirname,
    alias: {
      Main: 'app/components/Main.jsx',
      openWeatherMap: 'app/api/openWeatherMap.jsx'
    },
    extensions: ['', '.js', '.jsx']
  },
  module: {
    loaders: [
      {
        loader: 'babel-loader',
        query: {
          presets: ['react', 'es2015', 'stage-0']
        },
        test: /\.jsx?$/,
        exclude: /(node_modules|bower_components)/
      }
    ]
  }
};
