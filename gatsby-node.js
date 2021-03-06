/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: <https://www.gatsbyjs.com/docs/node-apis/>
 */

// You can delete this file if you're not using it

const path = require('path')

// Setup Import Alias
exports.onCreateWebpackConfig = ({ getConfig, actions }) => {
  const output = getConfig().output || {}

  actions.setWebpackConfig({
    output,
    resolve: {
      alias: {
        '@Components': path.resolve(__dirname, 'src/components'),
        utils: path.resolve(__dirname, 'src/utils'),
        '@Hooks': path.resolve(__dirname, 'src/hooks'),
      },
    },
  })
}
