import { join } from 'path'
import HtmlWebpackPlugin from 'html-webpack-plugin'
import ScriptExtHtmlPlugin from 'script-ext-html-webpack-plugin'

module.exports = {
  module: {
    rules: [
      {
        test: /\.js$/,
	exclude: /node_modules/,
	use: {
	  loader: 'babel-loader'
        }
      }
    ]
  },
  plugins: [
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
