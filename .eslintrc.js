module.exports = {
  'env': {
    'browser': true,
    'node'   : true,
    'es2021' : true
  },
  'extends': [
    // 'eslint:recommended',
    // 'plugin:vue/vue3-essential',
    'plugin:vue/vue3-recommended'
  ],
  'parserOptions': {
    'ecmaVersion': 'latest',
    'sourceType' : 'module'
  },
  'plugins': [
    'vue'
  ],
  'rules': {
    'vue/multi-word-component-names': 'off',
    'vue/require-default-prop': 'off'
  }
}
