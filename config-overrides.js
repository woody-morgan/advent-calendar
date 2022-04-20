const { override, addWebpackAlias } = require("customize-cra");
const path = require("path");

module.exports = override(
	addWebpackAlias({
		"@src": path.resolve(__dirname, "src"),
		"@api": path.resolve(__dirname, "src/core/api"),
		"@assets": path.resolve(__dirname, "src/core/assets"),
		"@components": path.resolve(__dirname, "src/components"),
		"@hooks": path.resolve(__dirname, "src/hooks"),
		"@interface": path.resolve(__dirname, "src/interface"),
		"@store": path.resolve(__dirname, "src/store"),
		"@styles": path.resolve(__dirname, "src/styles"),
		"@utils": path.resolve(__dirname, "src/utils"),
	}),
);
