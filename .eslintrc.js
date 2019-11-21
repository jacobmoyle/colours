module.exports = {
  env: {
    browser: true,
    es6: true,
    'cypress/globals': true,
    mocha: true,
  },
  extends: ['standard', 'plugin:cypress/recommended'],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  plugins: ['react', 'cypress', 'chai-friendly'],
  rules: {
    'comma-dangle': ['always'],
    'cypress/no-assigning-return-values': 'error',
    'cypress/no-unnecessary-waiting': 'error',
    'cypress/assertion-before-screenshot': 'warn',
    'no-unused-expressions': 0,
    'chai-friendly/no-unused-expressions': 2,
  },
}
