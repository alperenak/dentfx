module.exports = {
  env: {
    browser: true,
    es6: true,
    node: true,
  },
  extends: ['eslint:recommended', 'plugin:react/recommended'],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2020,
    sourceType: 'module',
  },
  plugins: ['react'],
  parser: 'babel-eslint',
  rules: {
    quotes: ['error', 'single'],
    'no-console': ['error', { allow: ['warn', 'error'] }],
    'jsx-a11y/click-events-have-key-events': [0],
    'react/prop-types': 0,
    'react/jsx-filename-extension': [1, { extensions: ['.js', '.jsx'] }],
  },
};
