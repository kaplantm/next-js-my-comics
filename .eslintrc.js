module.exports = {
  extends: [
    'airbnb',
    'airbnb/hooks',
    'plugin:@typescript-eslint/recommended',
    'plugin:import/errors',
    'plugin:import/warnings',
    'plugin:import/typescript',
    'plugin:jest/recommended',
    'plugin:react/recommended',
    'prettier',
  ],
  plugins: ['react', '@typescript-eslint', 'jest'],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: './tsconfig.json',
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2018,
    sourceType: 'module',
    createDefaultProgram: true,
  },
  env: {
    browser: true,
    es6: true,
    jest: true,
  },
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  rules: {
    'react-hooks/exhaustive-deps': 'warn',
    'max-len': ['warn', 130],
    radix: 0,
    'no-plusplus': ['error', { allowForLoopAfterthoughts: true }],
    'import/no-named-as-default': 'off',
    'jest/no-focused-tests': 'error',
    'react/jsx-props-no-spreading': 'off',
    'react/prop-types': 'off', // Since we do not use prop-types
    'react/require-default-props': 'off', // Since we do not use prop-types
    'object-curly-newline': 'off',
    'react/jsx-curly-newline': 'off',
    'import/extensions': 'off',
    'no-shadow': 'off', // turning off in favor of typescript no-shadow, which handles enum declarations better
    '@typescript-eslint/no-shadow': ['error'],
    'react/jsx-filename-extension': [
      1,
      {
        extensions: ['.tsx'],
      },
    ],
    'no-restricted-imports': [
      'error',
      {
        patterns: ['@material-ui/*/*/*', '!@material-ui/core/test-utils/*'],
      },
    ],
    'implicit-arrow-linebreak': 'off',
    'arrow-parens': ['warn', 'as-needed'],
    '@typescript-eslint/explicit-function-return-type': 'off',
    '@typescript-eslint/no-explicit-any': 'off',
    'react/no-unescaped-entities': ['error', { forbid: ['>', '}'] }],
    'react/forbid-elements': [1, { forbid: ['Hidden'] }],
    'react/jsx-one-expression-per-line': 'off',
    'no-confusing-arrow': 'off',
    'operator-linebreak': 'off',
    'no-use-before-define': 'off',
    '@typescript-eslint/no-use-before-define': [
      'error',
      {
        functions: false,
        classes: true,
        variables: true,
        enums: true,
        typedefs: true,
        ignoreTypeReferences: true,
      },
    ],
    'import/no-extraneous-dependencies': [
      'error',
      {
        devDependencies: [
          'support/braintree-stub/*.js',
          '**/*.mock.ts',
          '**/*.mock.tsx',
          '**/*.spec.ts',
          '**/*.spec.tsx',
        ],
      },
    ],
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    'react/jsx-wrap-multilines': 'off',
    'react/react-in-jsx-scope': 0,
    'jsx-a11y/label-has-associated-control': [
      2,
      {
        labelComponents: [],
        labelAttributes: [],
        controlComponents: [],
        assert: 'either',
        depth: 25,
      },
    ],
    'comma-dangle': [
      'error',
      {
        arrays: 'always-multiline',
        exports: 'always-multiline',
        functions: 'never',
        imports: 'always-multiline',
        objects: 'always-multiline',
      },
    ],
  },
  settings: {
    react: {
      version: 'detect',
    },
    'import/resolver': {
      node: {
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
        moduleDirectory: ['node_modules', 'src/'],
      },
      alias: {
        map: [
          ['src', './src'],
          ['@components/*', './src/components'],
          ['@page-containers/*', './src/page-containers'],
          ['@data-types', './src/types'],
          ['@lib/*', './src/lib'],
        ],
        extensions: ['.ts', '.tsx', '.js', '.jsx', '.json'],
      },
    },
  },
};
