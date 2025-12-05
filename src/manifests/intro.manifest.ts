import type { SlideManifest } from "@showcase/shared-libs";

export const introManifest: SlideManifest = {
  order: 1,
  basePath: "/intro",
  slides: [
    { path: "", title: "Welcome" },
    { path: "/whoami", title: "Chi sono" },
    { path: "/about", title: "About Single-SPA" },
    { path: "/setup", title: "Setup" },
    { path: "/spoilers", title: "Spoilers" },
  ],
};
