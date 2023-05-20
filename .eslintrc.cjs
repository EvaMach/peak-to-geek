module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'plugin:react/recommended',
    'airbnb-typescript',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    sourceType: 'module',
    project: './tsconfig.json',
  },
  plugins: [
    'react',
    '@typescript-eslint',
    'react-hooks',
    'import',
  ],
  ignorePatterns: ['webpack.config.js', '.eslintrc.cjs'],
  rules: {
    'prefer-destructuring': 'off',
    'arrow-body-style': 'off',
    'import/prefer-default-export': 'off',
    'no-nested-ternary': 'off',
    'no-void': ['error', { allowAsStatement: true }],
    'react/prop-types': 'off',
    'react/require-default-props': 'off',
    'react/react-in-jsx-scope': 'off',
    'react/function-component-definition': ['error', {
      namedComponents: 'arrow-function',
      unnamedComponents: 'arrow-function',
    }],
    'jsx-a11y/media-has-caption': 'off',
    '@typescript-eslint/explicit-function-return-type': 'error',
    '@typescript-eslint/explicit-member-accessibility': ['error'],
    '@typescript-eslint/member-ordering': ['error'],
    '@typescript-eslint/no-extraneous-class': ['error'],
    '@typescript-eslint/no-parameter-properties': ['error'],
    '@typescript-eslint/lines-between-class-members': [
      'error',
      'always',
      { 'exceptAfterSingleLine': true },
    ],
    '@typescript-eslint/no-floating-promises': ['error'],
    '@typescript-eslint/restrict-template-expressions': ['error', {
      allowNumber: true,
      allowBoolean: true,
    }],
  },
};
