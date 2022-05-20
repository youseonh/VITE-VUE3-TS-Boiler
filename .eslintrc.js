module.exports = {
  root: true,
  env: {
    node: true,
  },
  parser: 'vue-eslint-parser',
  parserOptions: {
    parser: '@typescript-eslint/parser',
    ecmaVersion: 2020,
    sourceType: 'module',
  },
  extends: [
    'plugin:@typescript-eslint/recommended',
    'eslint:recommended',
    'plugin:prettier/recommended',
    'plugin:vue/vue3-recommended',
  ],
  plugins: ['prettier', '@typescript-eslint'],
  rules: {
    'no-unused-vars': 'off', // 필수
    'prettier/prettier': [
      'error',
      {
        endOfLine: 'auto',
      },
    ],

    'vue/singleline-html-element-content-newline': 'off',
    'vue/multiline-html-element-content-newline': 'off',
    // Maximum 5 attributes per line instead of one
    'vue/max-attributes-per-line': [
      'error',
      {
        singleline: 8,
      },
    ],
  },
};
