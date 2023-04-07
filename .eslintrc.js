/** @type {import('eslint').Linter.BaseConfig} */
module.exports = {
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
    tsconfigRootDir: __dirname,
    project: ["./tsconfig.json"]
  },
  env: {
    es2021: true,
    node: true
  },
  extends: [
    "airbnb-base",
    "airbnb-typescript",
    "plugin:import/typescript",
    "plugin:@typescript-eslint/recommended",
    "eslint:recommended",
    "plugin:prettier/recommended"
  ],
  parser: "@typescript-eslint/parser",
  plugins: ["@typescript-eslint", "prettier"],
  rules: {
    "prettier/prettier": ["error", { endOfLine: "auto" }],
    "react/jsx-filename-extension": "off",
    "import/prefer-default-export": "off",
    "import/no-default-export": "error",
    "class-methods-use-this": "off"
  },
  ignorePatterns: ["**/*.js", "**/*.json", "node_modules", "dist"]
};
