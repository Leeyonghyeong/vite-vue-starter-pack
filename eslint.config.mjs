// eslint.config.js
import vue from 'eslint-plugin-vue'
import tseslint from '@typescript-eslint/eslint-plugin'
import tsParser from '@typescript-eslint/parser'
import prettier from 'eslint-config-prettier'
import vueParser from 'vue-eslint-parser'

export default [
  {
    ignores: ['node_modules', 'dist'],
  },
  {
    files: ['**/*.vue'],
    languageOptions: {
      parser: vueParser, // ✅ vue 파일은 vue-eslint-parser로 지정해야 함
      parserOptions: {
        parser: tsParser, // ✅ vue 내부 script는 typescript parser로
        ecmaVersion: 'latest',
        sourceType: 'module',
      },
    },
    plugins: { vue },
    rules: {
      ...vue.configs['flat/recommended'].rules,
      'vue/multi-word-component-names': 'off',
    },
  },
  {
    files: ['**/*.ts'],
    languageOptions: {
      parser: tsParser,
      parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
      },
    },
    plugins: { '@typescript-eslint': tseslint },
    rules: {
      ...tseslint.configs['flat/recommended'].rules,
      '@typescript-eslint/no-explicit-any': 'off',
      '@typescript-eslint/ban-ts-comment': 'off',
    },
  },
  prettier,
]
