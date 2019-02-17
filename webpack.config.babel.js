import { join } from 'path'
import HtmlWebpackPlugin from 'html-webpack-plugin'
import ScriptExtHtmlPlugin from 'script-ext-html-webpack-plugin'
import MiniCssExtractPlugin from 'mini-css-extract-plugin'

module.exports = {
  module: {
    rules: [
      {
        test: /\.js$/,
	      exclude: /node_modules/,
	      use: {
	        loader: 'babel-loader'
        }
      },
      {
        test: /\.css$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
            options: {
              publicPath: '../'
            }
          },
          'css-loader'
        ]
      }
    ]
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: '[name].css',
      chunkFilename: '[id].css'
    }),
    new HtmlWebpackPlugin({
      title: 'Custom template',
      template: join(__dirname, 'src/index.template.html')
    }),
    new ScriptExtHtmlPlugin({
      defaultAttribute: 'defer'
    })
  ],
  devtool: 'source-map',
  devServer: {
    contentBase: join(__dirname, 'dist'),
    compress: true,
    port: 9000
  }
}
