import { defineAUMIConfig } from '@aumi/aumi';

export default defineAUMIConfig({
  routes: [
    { path: "/", component: "index" },
    { path: "/docs", component: "docs" },
  ],
  npmClient: 'pnpm',
  lessLoader: {},
  cssLoaderModules: {
    auto: true,
  },
  autoCSSModules: true,
  react: {},
});
