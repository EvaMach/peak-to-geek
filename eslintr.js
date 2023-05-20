module.exports = {
  env: {
    es2015: true,
    browser: true,
  },
  parserOptions: {
    sourceType: 'module',
    project: ['./tsconfig.json'],
    ecmaVersion: 'latest',
    ecmaFeatures: {
      jsx: true,
    },
  },
  ignorePatterns: ['node_modules/', 'webpack.*.js'],
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint', 'react', 'react-hooks', 'import'],
  extends: ['plugin:react/recommended', 'airbnb', 'airbnb-typescript'],
  rules: {
    strict: 0,
    'react/function-component-definition': [
      'error',
      {
        namedComponents: 'arrow-function',
        unnamedComponents: 'arrow-function',
      },
    ],
  },
  overrides: [
    {
      files: ['*.ts', '*.tsx'],
      rules: {
        '@typescript-eslint/explicit-function-return-type': ['error'],
      },
    },
  ],
};
