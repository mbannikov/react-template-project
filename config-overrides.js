const paths = require('path');

module.exports = function override(config, env) {
  config.resolve.alias.src = paths.resolve('src');

  return config;
}
