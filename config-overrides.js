const { override, addWebpackAlias } = require("customize-cra");
const path = require("path");

module.exports = override(
	addWebpackAlias({
		"@src": path.resolve(__dirname, "src"),
		"@pages": path.resolve(__dirname, "src/pages"),
		"@styles": path.resolve(__dirname, "src/styles"),
		"@components": path.resolve(__dirname, "src/components"),
		"@utils": path.resolve(__dirname, "src/utils"),
		"@core": path.resolve(__dirname, "src/core"),
		"@api": path.resolve(__dirname, "src/core/api"),
	}),
);
