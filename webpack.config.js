const HtmlWebpackPlugin = require('html-webpack-plugin')
const path = require('path')

module.exports = {
  entry: {
    main: './src/index.js'
  },
  output: {
    filename: 'app.[name].js',
    path: path.join(__dirname, '/dist')
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: 'public/index.html'
    })
  ],
  devServer: {
    historyApiFallback: true,
    contentBase: path.join(__dirname, 'dist')
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react']
          }
        }
      },
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader']
      },
      {
        test: /\.(png|jpe?g|gif|ico|pdf)$/i,
        use: [
          {
            loader: 'file-loader'
          }
        ]
      },
      {
        test: /\.svg$/,
        use: ['@svgr/webpack']
      }
    ]
  },
  resolve: {
    extensions: ['*', '.js'],
    alias: {
      files: path.resolve(__dirname, 'public/files'),
      images: path.resolve(__dirname, 'public/img'),
      atoms: path.resolve(__dirname, 'src/components/atoms'),
      molecules: path.resolve(__dirname, 'src/components/molecules'),
      organisms: path.resolve(__dirname, 'src/components/organisms'),
      pages: path.resolve(__dirname, 'src/pages'),
      hooks: path.resolve(__dirname, 'src/hooks'),
      utils: path.resolve(__dirname, 'src/utils'),
      src: path.resolve(__dirname, 'src')
    }
  }
}
