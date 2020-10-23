const path = require('path')
const rootPath = path.resolve(__dirname, '../src/')

module.exports = ({ config, mode }) => {
  mode = "development"

  config.module.rules.push({
    test: /\.(otf|eot|svg|ttf|woff|woff2)(\?.+)?$/,
    loader: 'url-loader',
  });

  config.module.rules.push({
    test: /\.scss$/,
    use: [
      'style-loader',
      'css-loader',
      {
        loader: 'sass-loader',
      },
      {
        loader: 'sass-resources-loader',
        options: {
          resources: [
            path.resolve(__dirname, '../src/assets/scss/variables.scss'),
            path.resolve(__dirname, '../src/assets/scss/mixins.scss'),
            path.resolve(__dirname, '../src/assets/scss/reset.scss'),
          ],
        }
      }
    ]
  });

  config.resolve.extensions = ['.js', '.vue', '.json']
  config.resolve.alias['~'] = rootPath
  config.resolve.alias['@'] = rootPath

  return config
}
