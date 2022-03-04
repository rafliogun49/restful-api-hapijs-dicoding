module.exports = {
  env: {
    browser: true,
    commonjs: true,
    es2021: true,
  },
  extends: [
    'airbnb-base',
  ],
  parserOptions: {
    ecmaVersion: 12,
  },
  rules: {
    'eol-last': 0,
    'no-console': 0,
    'consistent-return': 0,
    'linebreak-style': 0,
    'no-new': 0,
    'no-plusplus': 0,
    'max-len': 0,
  },
};
