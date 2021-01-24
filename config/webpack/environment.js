const { environment } = require("@rails/webpacker");
const erb = require("./loaders/erb");
const { resolve } = require("path");

environment.config.merge({
  resolve: {
    alias: {
      src: resolve("app/javascript"),
    },
  },
});
environment.loaders.append("erb", erb);

module.exports = environment;
