module.exports = {
    webpack: {
        configure: (webpackConfig) => {
            webpackConfig.performance = {
                hints: false,
                maxEntrypointSize: 512000,
                maxAssetSize: 512000
            };
            return webpackConfig;
        }
    }
};
