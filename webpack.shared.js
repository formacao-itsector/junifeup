const HtmlWebpackPlugin = require('html-webpack-plugin');
const ESLintPlugin = require('eslint-webpack-plugin');

// documentação geral https://webpack.js.org/configuration/

// permite ao webpack interpretar ficheiros além de .js e .json
// https://webpack.js.org/concepts/loaders/

const moduleConfig = {
  rules: [
    {
      test: /\.(?:ts|tsx)$/,
      exclude: /node_modules/,
      resolve: {
        extensions: ['.ts', '.tsx', '.js', '.json']
      },
      use: 'ts-loader'
    },
    {
      test: /\.(ico|jpg|jpeg|png|gif)$/,
      use: ['url-loader']
    }
  ]
};

// permite alterar como o webpack resolve/importa modulos
// ex: "import { Box } from '@components'" em vez de "import { Box } from ../../app/components/box.js"
// https://webpack.js.org/configuration/resolve/

const resolveConfig = {
  alias: {}
};

// configuração de plugins
// https://webpack.js.org/concepts/plugins/

// html-webpack-plugin
// https://webpack.js.org/plugins/html-webpack-plugin/

// eslint-webpack-plugin
// https://webpack.js.org/plugins/eslint-webpack-plugin/

const pluginConfig = () => {
  return [
    new HtmlWebpackPlugin({
      template: './public/template.html',
      filename: 'index.html',
      inject: 'head',
      favicon: './public/favicon.ico'
    }),
    new ESLintPlugin({
      extensions: ['js', 'jsx', 'ts', 'tsx'],
      emitWarning: true
    })
  ];
};

// configuração do dev server, em especial atenção em que porta é executado (5005)
// https://webpack.js.org/configuration/dev-server/

const devServerConfig = {
  port: 5005,
  historyApiFallback: true
};

module.exports = {
  moduleConfig,
  resolveConfig,
  pluginConfig,
  devServerConfig
};
