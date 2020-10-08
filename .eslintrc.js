// eslint-disable-next-line @typescript-eslint/no-var-requires
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
    'plugin:@typescript-eslint/recommended',
    '@react-native-community',
  ],
  parserOptions: {
    ecmaVersion: 2019,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },
  },
  plugins: ['@typescript-eslint'],
  overrides: [
    {
      files: ['*.ts', '*.tsx', '.*.ts', '.*.tsx'],
      parserOptions: {
        project: [path.resolve(__dirname, '.tsconfig.json')],
      },
      extends: ['plugin:@typescript-eslint/recommended'],
      rules: {
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
