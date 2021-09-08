require('dotenv').config()

const path = require('path');


module.exports = {
  env: {
    GITHUB_CLIENT_ID: process.env.GITHUB_CLIENT_ID,
    REPO_FULL_NAME: process.env.REPO_FULL_NAME,
    BASE_BRANCH: process.env.BASE_BRANCH,
  },

  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
  },

  webpack: (config, { buildId, dev, isServer, defaultLoaders, webpack }) => {
    config.module.rules.push({
      test: /\.(woff|woff2|eot|ttf|svg)$/,
      loader: "url-loader",
    });

    // Important: return the modified config
    return config;
  },

  // ...
}
