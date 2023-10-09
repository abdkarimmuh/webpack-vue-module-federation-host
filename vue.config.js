const { defineConfig } = require("@vue/cli-service");
const { ModuleFederationPlugin } = require("webpack").container;

module.exports = defineConfig({
  pages: {
    index: {
      entry: "./src/index.js",
    },
  },
  configureWebpack: {
    plugins: [
      new ModuleFederationPlugin({
        remotes: {
          app_remote: "remote@http://localhost:8082/remoteEntry.js",
        },
      }),
    ],
  },
  transpileDependencies: true,
});
