import type { StorybookConfig } from "@storybook/nextjs";

const config: StorybookConfig = {
  stories: ["../src/storybook/**/*.mdx", "../src/**/*.stories.@(js|jsx|mjs|ts|tsx)"],
  // stories: ['../src/app/storybook/**/*.stories.@(js|jsx|ts|tsx|mdx)'],
  addons: [
    "@storybook/addon-onboarding",
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@chromatic-com/storybook",
    "@storybook/addon-interactions",
  ],
  framework: {
    name: "@storybook/nextjs",
    options: {},
  },
  staticDirs: ["../public"],
};
export default config;
