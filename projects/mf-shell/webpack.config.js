const {
  shareAll,
  withModuleFederationPlugin,
} = require("@angular-architects/module-federation/webpack");

const devConfig = {
  mode: "development",
  devServer: {
    port: 3000,
    historyApiFallback: true,
  }
}

const ipDocker = process.env.IPDOCKER || 'localhost';

module.exports = withModuleFederationPlugin({
  remotes: {
    mfShopping: `http://${ipDocker}:4201/remoteEntry.js`,
    mfPayment: `http://${ipDocker}:4202/remoteEntry.js`,
  },

  shared: {
    ...shareAll({
      singleton: true,
      strictVersion: true,
      requiredVersion: "auto",
    }),
  },
  sharedMappings: ["@commons-lib"],
});