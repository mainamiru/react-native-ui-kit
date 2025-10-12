const { getDefaultConfig } = require("expo/metro-config");
const path = require("path");

const projectRoot = __dirname;
const config = getDefaultConfig(projectRoot);
const monorepoRoot = path.resolve(projectRoot, "../..");

// 1. Watch app + shared packages + monorepo root
config.watchFolders = [projectRoot, monorepoRoot];

// 2. Ensure correct node_modules resolution order
config.resolver.nodeModulesPaths = [
  path.resolve(projectRoot, "node_modules"),
  path.resolve(monorepoRoot, "node_modules"),
];

module.exports = config;
