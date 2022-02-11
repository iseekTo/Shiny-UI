module.exports = {
  parser: "@typescript-eslint/parser",
  parserOptions: {
    tsconfigRootDir: __dirname,
    ecmaVersion: 2020,
    sourceType: "module",
    ecmaFeatures: {
      jsx: true,
    },
    project: "./tsconfig.json",
  },
  plugins: ["@typescript-eslint", "react", "prettier"],
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:react/recommended",
    "plugin:prettier/recommended",
    "prettier",
  ],
  rules: {
    "react/prop-types": "off",
  },
  env: {
    browser: true,
    node: true,
  },
  ignorePatterns: ["/*.js"],
  settings: {
    react: {
      version: "detect",
    },
    "import/resolver": "webpack",
  },
};
