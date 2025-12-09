const { merge } = require("webpack-merge");
const singleSpaDefaults = require("webpack-config-single-spa-react-ts");
const fs = require("fs");
const path = require("path");

module.exports = (webpackConfigEnv, argv) => {
  const defaultConfig = singleSpaDefaults({
    orgName: "zanza00",
    projectName: "intro",
    webpackConfigEnv,
    argv,
    outputSystemJS: false,
  });

  return merge(defaultConfig, {
    devServer: {
      port: 8082,
      server: {
        // type: "https",
        // options: {
        //   key: fs.readFileSync(path.resolve(__dirname, "../.certs/localhost+2-key.pem")),
        //   cert: fs.readFileSync(path.resolve(__dirname, "../.certs/localhost+2.pem")),
        // },
      },
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods":
          "GET, POST, PUT, DELETE, PATCH, OPTIONS",
        "Access-Control-Allow-Headers":
          "X-Requested-With, content-type, Authorization",
      },
    },
  });
};
