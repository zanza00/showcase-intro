const { merge } = require("webpack-merge");
const singleSpaDefaults = require("webpack-config-single-spa-react-ts");

module.exports = (webpackConfigEnv, argv) => {
  const defaultConfig = singleSpaDefaults({
    orgName: "showcase",
    projectName: "intro",
    webpackConfigEnv,
    argv,
    outputSystemJS: false,
  });

  return merge(defaultConfig, {
    devServer: {
      port: 8083,
    },
    externals: ["@showcase/shared-libs"],
  });
};
