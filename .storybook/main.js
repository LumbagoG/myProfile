module.exports = {
    stories: ["../src/components/**/*.stories.mdx", "../docs/**/*.stories.mdx"],
    addons: [
        "@storybook/addon-links",
        "@storybook/addon-essentials",
        "@storybook/addon-interactions",
        "@storybook/preset-create-react-app",
        "@storybook/addon-viewport",
        {
            name: "@storybook/addon-docs",
            options: {
                sourceLoaderOptions: {
                    injectStoryParameters: false
                }
            }
        },
        "@storybook/addon-measure",
        "@storybook/addon-a11y"
    ],
    framework: "@storybook/react",
    core: {
        builder: "@storybook/builder-webpack5"
    }
};
