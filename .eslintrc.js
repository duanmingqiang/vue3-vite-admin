module.exports = {
  'env': {
    'browser': true,
    'node'   : true,
    'es2021' : true
  },
  'extends': [
    'eslint:recommended',
    'plugin:vue/vue3-essential',
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
    // 'vue/script-setup-uses-vars': 'error'
    'vue/script-setup-uses-vars'  : 'error',
    'vue/custom-event-name-casing': 'off',
    'no-use-before-define'        : 'off',
    'no-unused-vars'              : [
      'error',
      {
        argsIgnorePattern: '^_',
        varsIgnorePattern: '^_',
      },
    ],
    'space-before-function-paren': 'off',

    'vue/attributes-order'                       : 'off',
    'vue/one-component-per-file'                 : 'off',
    'vue/html-closing-bracket-newline'           : 'off',
    'vue/max-attributes-per-line'                : 'off',
    'vue/multiline-html-element-content-newline' : 'off',
    'vue/singleline-html-element-content-newline': 'off',
    'vue/attribute-hyphenation'                  : 'off',
    'vue/require-default-prop'                   : 'off',
    'vue/html-self-closing'                      : [
      'error',
      {
        html: {
          void     : 'always',
          normal   : 'never',
          component: 'always',
        },
        svg : 'always',
        math: 'always',
      },
    ],
    'vue/multi-word-component-names': [ 'off', {
      'ignores': []
    }],


    // 'vue/script-setup-uses-vars': 'error',
    'indent'               : [ 'error', 2 ],
    // 'linebreak-style': [ 'error', 'windows' ],
    'quotes'               : [ 'error', 'single' ],
    'semi'                 : [ 'error', 'never' ],
    'object-shorthand'     : [ 'error', 'always' ],
    'array-bracket-spacing': [
      'error',
      'always',
      { 
        'objectsInArrays': false,
        'arraysInArrays' : false
      }
    ],
    'array-callback-return'    : 'error',
    'arrow-spacing'            : 'error',
    'block-scoped-var'         : 'error',
    'block-spacing'            : 'error',
    'brace-style'              : [ 'error', '1tbs', { 'allowSingleLine': true }],
    'camelcase'                : 'error',
    'comma-spacing'            : [ 'error', { 'before': false, 'after': true }],
    'comma-style'              : [ 'error', 'last' ],
    'computed-property-spacing': [ 'error', 'never' ],
    'consistent-this'          : [ 'error', 'that' ],
    'constructor-super'        : 'error',
    'curly'                    : 'error',
    'default-case'             : 'error',
    'dot-location'             : [ 'error', 'property' ],
    'dot-notation'             : 'error',
    'eol-last'                 : [ 'error', 'always' ],
    'eqeqeq'                   : [ 'error', 'always' ],
    'for-direction'            : 'warn',
    'func-call-spacing'        : [ 'error', 'never' ],
    'func-names'               : [ 'warn', 'as-needed' ],
    'function-paren-newline'   : [ 'error', { 'minItems': 4 }],
    'getter-return'            : [ 'error', { 'allowImplicit': true }],
    'guard-for-in'             : 'warn',
    'implicit-arrow-linebreak' : [ 'warn', 'beside' ],
    'jsx-quotes'               : [ 'error', 'prefer-single' ],
    'key-spacing'              : [ 'error', {
      'beforeColon': false,
      'align'      : 'colon'
    }],
    'keyword-spacing': [ 'error', {
      'before': true,
      'after' : true
    }],
    'lines-around-comment'         : [ 'warn', { 'beforeBlockComment': true }],
    'new-cap'                      : 'warn',
    'no-await-in-loop'             : 'error',
    'no-buffer-constructor'        : 'error',
    'no-cond-assign'               : 'error',
    'no-empty'                     : 'warn',
    'no-constant-condition'        : 'warn',
    'vue/no-multiple-template-root': 'off'

  }
  // ignorePatterns: ['*.sh', 'node_modules', '*.md', '*.woff', '*.ttf', '.vscode', '.idea', 'dist', '/public', '/docs', '.husky', '.local', '/bin', 'Dockerfile']
}
