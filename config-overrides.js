const { override, addWebpackAlias } = require("customize-cra");
const path = require("path");

module.exports = override(
    addWebpackAlias({
        "@": path.resolve(__dirname, "src"),
        "@api": path.resolve(__dirname, "src/api"),
        "@asset": path.resolve(__dirname, "src/asset"),
        "@component": path.resolve(__dirname, "src/component"),
        "@container": path.resolve(__dirname, "src/container"),
        "@features": path.resolve(__dirname, "src/features"),
        "@hooks": path.resolve(__dirname, "src/hooks"),
        "@routes": path.resolve(__dirname, "src/routes"),
        "@styles": path.resolve(__dirname, "src/styles"),
        "@utils": path.resolve(__dirname, "src/utils"),
    }),
);
