const path = require('path');
const { entry, externals } = require('./preBuild');
const { webpackBuildDir } = require('./buildConstants');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  entry,
  externals,
  mode: 'production',
  plugins: [
    new MiniCssExtractPlugin({
      runtime: false,
      filename: '[name].css',
      chunkFilename: '[id].css',
    }),
  ],
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader', 'postcss-loader'],
      },
      // custom rule for extracting core style
      {
        test: /\.s[ac]ss$/i,
        include: [path.resolve(__dirname, 'src/components/Core')],
        use: [{ loader: MiniCssExtractPlugin.loader, options: { emit: true } }, 'css-loader', 'sass-loader', 'postcss-loader'],
      },
      // scss loader rules for other files
      {
        test: /\.s[ac]ss$/i,
        exclude: [path.resolve(__dirname, 'src/components/Core')],
        use: ['style-loader', 'css-loader', 'sass-loader', 'postcss-loader'],
      },
    ],
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
  },
  output: {
    filename: '[name].js',
    libraryTarget: 'umd',
    path: path.resolve(__dirname, `${webpackBuildDir}/`),
    clean: true,
  },
};
