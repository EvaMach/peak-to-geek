module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'plugin:react/recommended',
    'plugin:@typescript-eslint/recommended',
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
    'jsx-a11y',
  ],
  ignorePatterns: ['webpack.config.js', '.eslintrc.cjs'],
  rules: {
    'prefer-destructuring': 'off',
    'arrow-body-style': 'off',
    'no-nested-ternary': 'off',
    'no-void': ['error', { allowAsStatement: true }],
    'react/require-default-props': 'off',
    'react/react-in-jsx-scope': 'off',
    'react/function-component-definition': ['error', {
      namedComponents: 'arrow-function',
      unnamedComponents: 'arrow-function',
    }],
    'jsx-a11y/media-has-caption': 'off',

  },
  overrides: [
    {
      files: ['*.tsx', '*.ts'],
      rules: {
        '@typescript-eslint/explicit-function-return-type': 'error',
        '@typescript-eslint/ban-ts-comment': 'off',
        '@typescript-eslint/no-non-null-assertion': 'off',
      }
    }
  ]
};
