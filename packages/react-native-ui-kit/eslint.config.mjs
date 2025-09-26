import { FlatCompat } from "@eslint/eslintrc";
import js from "@eslint/js";
import prettierConfig from "eslint-config-prettier";
import prettierPlugin from "eslint-plugin-prettier";
import reactPlugin from "eslint-plugin-react";
import reactHooks from "eslint-plugin-react-hooks";
import reactNative from "eslint-plugin-react-native";
import tseslint from "typescript-eslint";

const compat = new FlatCompat({
  // eslint-disable-next-line no-undef
  baseDirectory: process.cwd(),
  recommendedConfig: true,
});

export default [
  js.configs.recommended,
  ...tseslint.configs.recommended,
  ...compat.extends("plugin:react/recommended"),
  ...compat.extends("plugin:react-hooks/recommended"),
  ...compat.extends("plugin:react-native/all"),
  prettierConfig,
  {
    files: ["**/*.{ts,tsx,js,jsx}"],
    languageOptions: {
      ecmaVersion: "latest",
      sourceType: "module",
      parser: tseslint.parser,
      parserOptions: { ecmaFeatures: { jsx: true } },
    },
    plugins: {
      react: reactPlugin,
      "react-hooks": reactHooks,
      "react-native": reactNative,
      "@typescript-eslint": tseslint.plugin,
      prettier: prettierPlugin,
    },
    rules: {
      "no-undef": "off",
      "prettier/prettier": "off",
      "@typescript-eslint/no-unused-vars": [
        "warn",
        { argsIgnorePattern: "^_" },
      ],
      "@typescript-eslint/explicit-module-boundary-types": "off",
      "react/prop-types": "off",
      "react/react-in-jsx-scope": "off",
      "react-native/no-inline-styles": "off",
      "react-native/no-raw-text": "off",
      "no-console": "warn",
      "react-native/no-unused-styles": "off",
      "react-native/no-color-literals": "off",
      "@typescript-eslint/no-require-imports": "off",
      "@typescript-eslint/no-explicit-any": "off",
      "react-hooks/exhaustive-deps": "off",
    },
    settings: {
      react: {
        version: "19.1.0",
      },
    },
  },
];
