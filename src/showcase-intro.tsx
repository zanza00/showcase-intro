import React from "react";
import ReactDOMClient from "react-dom/client";
import singleSpaReact from "single-spa-react";
import Root from "./root.component";

// Export slide manifest for shell to consume
export { introManifest } from "./manifests/intro.manifest";

const lifecycles = singleSpaReact({
  React,
  ReactDOMClient,
  rootComponent: Root,
  domElementGetter: () => document.getElementById("main-content")!,
  errorBoundary(err, info, props) {
    // Customize the root error boundary for your microfrontend here.
    return null;
  },
});

export const { bootstrap, mount, unmount } = lifecycles;
