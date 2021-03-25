module.exports = {
  root: true,

  env: {
    node: true
  },

  extends: ['plugin:vue/essential', 'eslint:recommended'],

  parserOptions: {
    parser: 'babel-eslint'
  },
  overrides: [
    {
      "files": [
        "**/*.spec.js",
        "**/*.test.js"
      ],
      "env": {
        "jest": true
      }
    }
  ],

  rules: {
    'no-console': 'off',
    'no-debugger': 'off',

    'no-useless-catch': 'off'
  }
}
