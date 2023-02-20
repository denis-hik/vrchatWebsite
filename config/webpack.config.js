const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

const paths = require('./patchs');

module.exports = {
  output: {
    path: paths.build,
    publicPath: '/',
  },
  entry: './src/index.tsx',
  resolve: {
    extensions: ['.js', '.jsx', '.ts', '.tsx', '.d.ts'],
    modules: ['node_modules', paths.src],
    fallback: {
      "path": require.resolve("path-browserify"),
      "stream": require.resolve("stream-browserify"),
      "zlib": require.resolve("browserify-zlib"),
      "os": false,
      "util": false,
      "fs": false,
      "child_process": false,
      "tls": false,
      "net": false,
      "https": false,
      "assert": false,
      "buffer": false,
    }
  },
  module: {
    rules: [
      {
        test: /\.(ts|tsx)?$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        options: {
          plugins: [
            [
              'babel-plugin-named-asset-import',
              {
                loaderMap: {
                  svg: {
                    ReactComponent: '@svgr/webpack?-svgo,+titleProp,+ref![path]',
                  },
                },
              },
            ],
          ],
        },
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
        exclude: /\.module\.css$/,
      },
      {
        test: /\.(png|jpe?g|gif|swf|mp3)$/i,
        loader: 'file-loader',
        options: {
          name: 'img/[name]-[hash:6].[ext]',
        },
      },
      {
        test: /\.(woff|woff2|ttf|eot|otf)$/,
        loader: 'file-loader',
        options: {
          name: 'fonts/[name]-[hash:6].[ext]',
        },
      },
      {
        test: /\.svg$/,
        loader: 'file-loader',
        options: {
          name: 'icons/[name]-[hash:6].[ext]',
        },
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: 'public/index.html',
      // favicon: 'public/favicon.ico',
    }),
    new CleanWebpackPlugin(),
  ],
};
