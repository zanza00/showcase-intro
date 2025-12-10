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

  const certPath = path.resolve(__dirname, "certs/localhost.pem");
  const keyPath = path.resolve(__dirname, "certs/localhost-key.pem");
  
  const httpsOptions = fs.existsSync(certPath) && fs.existsSync(keyPath)
    ? {
        type: "https",
        options: {
          key: fs.readFileSync(keyPath),
          cert: fs.readFileSync(certPath),
        },
      }
    : { type: "http" };

  return merge(defaultConfig, {
    devServer: {
      port: 8082,
      server: httpsOptions,
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
