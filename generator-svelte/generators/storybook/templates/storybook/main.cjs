module.exports = {
    core: {
        builder: "storybook-builder-vite",
    },
    stories: [
        "../src/**/*.stories.mdx",
        "../src/**/*.stories.@(js|jsx|ts|tsx|svelte)",
    ],
    addons: [
        "@storybook/addon-links",
        "@storybook/addon-essentials",
        "@storybook/addon-svelte-csf",
    ],
    svelteOptions: {
        preprocess: require("../svelte.config.cjs").preprocess,
    },
    async viteFinal(config, { configType }) {
        config.resolve.dedupe = ["@storybook/client-api"];
        return config;
    },
};
