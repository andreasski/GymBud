const path = require('path');

module.exports = {
  parser: '@typescript-eslint/parser',
  settings: {
    react: {
      pragma: 'React',
      version: 'detect',
    },
  },
  env: {
    browser: true,
    es6: true,
    node: true,
    jest: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    '@react-native-community',
  ],
  parserOptions: {
    ecmaVersion: 2019,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },
  },
  overrides: [
    {
      files: ['*.ts', '*.tsx', '.*.ts', '.*.tsx'],
      parserOptions: {
        project: [path.resolve(__dirname, '.tsconfig.json')],
      },
      extends: ['plugin:@typescript-eslint/recommended'],
      rules: {
        // ...as we do for js code.
        '@typescript-eslint/indent': ['error', 2],

        // We will be using require in some of the code, especially in the build.
        '@typescript-eslint/no-var-requires': 'off',

        // See `no-use-before-define`.
        '@typescript-eslint/no-use-before-define': [
          'error',
          { functions: false, classes: true },
        ],
        '@typescript-eslint/interface-name-prefix': 0,
      },
    },
  ],
  rules: {
    semi: 'error',
  },
};
