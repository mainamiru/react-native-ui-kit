const { execSync } = require("child_process");
const fs = require("fs");
const path = require("path");

const pkg = "@react-native-vector-icons";

// Detect package manager: npm, yarn, pnpm
function detectPackageManager() {
  if (fs.existsSync(path.join(process.cwd(), "bun.lock"))) return "bun";
  if (fs.existsSync(path.join(process.cwd(), "bun.lockb"))) return "bun";
  if (fs.existsSync(path.join(process.cwd(), "yarn.lock"))) return "yarn";
  if (fs.existsSync(path.join(process.cwd(), "pnpm-lock.yaml"))) return "pnpm";
  return "npm";
}

// Install package using detected package manager
function installPackage(packageManager, pkg) {
  try {
    const cmd = {
      bun: `bun add ${pkg}`,
      npm: `npm install ${pkg} --save`,
      yarn: `yarn add ${pkg}`,
      pnpm: `pnpm add ${pkg}`,
    }[packageManager];

    console.log(`Installing ${pkg} using ${packageManager}...`);
    execSync(cmd, { stdio: "inherit" });
    console.log(`✅ ${pkg} has been installed.`);
  } catch (err) {
    console.error(`❌ Failed to install ${pkg}. Please install it manually.`);
  }
}

// Main check
try {
  require.resolve(pkg);
  console.log(`✅ ${pkg} is installed.`);
} catch (err) {
  console.warn(
    `\n⚠️  ${pkg} is not installed!\n` +
      `   It is required to use @mainamiru/react-native-ui-kit.\n`
  );
  const manager = detectPackageManager();
  installPackage(manager, pkg);
}
