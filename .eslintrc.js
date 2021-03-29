module.exports = {
  env: {
    browser: true,
    es6: true,
  },
  extends: [
    "plugin:react/recommended",
    "airbnb",
    "plugin:jest/recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:import/errors",
    "plugin:import/warnings",
    "plugin:import/typescript",
  ],
  globals: {
    Atomics: "readonly",
    SharedArrayBuffer: "readonly",
  },
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2018,
    sourceType: "module",
  },
  plugins: ["react", "@typescript-eslint", "jest"],
  settings: {
    "import/resolver": {
      node: {
        extensions: [".js", ".jsx", ".ts", ".tsx"],
        moduleDirectory: ["node_modules", "src/"],
      },
      alias: {
        map: [
          ["src", "./src"],
          ["@components/*", "./src/components"],
          ["@page-containers/*", "./src/page-containers"],
          ["@data-types", "./src/types"],
          ["@lib/*", "./src/lib"],
        ],
        extensions: [".ts", ".tsx", ".js", ".jsx", ".json"],
      },
    },
  },
  rules: {
    "max-len": ["error", 120],
    "import/no-named-as-default": "off",
    "jest/no-focused-tests": "error",
    "react/jsx-props-no-spreading": "off",
    "object-curly-newline": "off",
    "react/jsx-curly-newline": "off",
    "import/extensions": "off",
    "react/jsx-filename-extension": [
      1,
      {
        extensions: [".tsx"],
      },
    ],
    "implicit-arrow-linebreak": "off",
    "@typescript-eslint/explicit-function-return-type": "off",
    "@typescript-eslint/no-explicit-any": "off",
    "react/no-unescaped-entities": ["error", { forbid: [">", "}"] }],
    "react/forbid-elements": [1, { forbid: ["Hidden"] }],
    "react/jsx-one-expression-per-line": "off",
    "no-confusing-arrow": "off",
    "operator-linebreak": "off",
    "import/no-extraneous-dependencies": [
      "error",
      {
        devDependencies: [
          "support/braintree-stub/*.js",
          "**/*.mock.ts",
          "**/*.mock.tsx",
          "**/*.spec.ts",
          "**/*.spec.tsx",
        ],
      },
    ],
    "react/jsx-wrap-multilines": "off",
    "comma-dangle": [
      "error",
      {
        arrays: "always-multiline",
        exports: "always-multiline",
        functions: "never",
        imports: "always-multiline",
        objects: "always-multiline",
      },
    ],
  },
};
