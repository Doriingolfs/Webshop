module.exports = {
    "env": [
      'eslint:recommended',
      'plugin:vue/essential'
    ],

    "extends": [
        "eslint:recommended",
        "plugin:vue/essential"
    ],

    "globals": {
        "Atomics": "readonly",
        "SharedArrayBuffer": "readonly"
    },

    "parserOptions": {
        "ecmaVersion": 2018,
        "sourceType": "module"
    },

    "plugins": [
        "vue"
    ],

    "rules": {
    },

    root: true,

    env: {
      browser: true,
      es6: true,
      node: true
    },

    parserOptions: {
      ecmaVersion: 2018,
      sourceType: 'module',
      parser: 'babel-eslint'
    },

    rules: {
      'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
      'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off'
    }
};
