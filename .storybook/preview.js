export const parameters = {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
        matchers: {
            color: /(background|color)$/i,
            date: /Date$/
        }
    },
    layout: "centered",
    previewTabs: {
        canvas: {
            hidden: true
        }
    },
    viewMode: "docs",
    chromatic: { disableSnapshot: false }
};
