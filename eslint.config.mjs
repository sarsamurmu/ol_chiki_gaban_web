// @ts-check
import js from '@eslint/js'
import globals from 'globals'
import { defineConfig } from 'eslint/config'
import stylistic from '@stylistic/eslint-plugin'
import eslintReact from '@eslint-react/eslint-plugin'

/* eslint-disable @stylistic/quote-props */
/** @type {import('@eslint/core').RulesConfig} */
const stylisticRules = {
  'arrow-parens': ['error', 'as-needed'],
  'arrow-spacing': 'error',
  'block-spacing': ['error', 'always'],
  'brace-style': ['error', '1tbs'],
  'comma-dangle': 'off',
  'comma-spacing': ['error', { before: false, after: true }],
  'comma-style': ['error', 'last'],
  'computed-property-spacing': ['error', 'never'],
  'dot-location': ['error', 'property'],
  'eol-last': ['error', 'always'],
  'generator-star-spacing': ['error', 'before'],
  'indent': ['error', 2],
  'indent-binary-ops': ['error', 2],
  'jsx-closing-bracket-location': ['error', { selfClosing: 'after-props', nonEmpty: 'after-props' }],
  'jsx-closing-tag-location': ['error', 'line-aligned'],
  'jsx-curly-brace-presence': ['error', { props: 'never', children: 'ignore', propElementValues: 'always' }],
  'jsx-curly-newline': ['error', 'consistent'],
  'jsx-curly-spacing': ['error', { when: 'never' }],
  'jsx-equals-spacing': ['error', 'never'],
  'jsx-first-prop-new-line': ['error', 'multiline-multiprop'],
  'jsx-function-call-newline': ['error', 'multiline'],
  'jsx-indent-props': ['error', 2],
  'jsx-max-props-per-line': ['error', { when: 'multiline', maximum: 1 }],
  'jsx-one-expression-per-line': ['off', { allow: 'single-line' }],
  'jsx-quotes': ['error', 'prefer-single'],
  'jsx-tag-spacing': ['error', { closingSlash: 'never', beforeSelfClosing: 'always', afterOpening: 'never', beforeClosing: 'never' }],
  'jsx-wrap-multilines': ['error', {
    declaration: 'parens-new-line',
    assignment: 'parens-new-line',
    return: 'parens-new-line',
    arrow: 'parens-new-line',
    condition: 'parens-new-line',
    logical: 'parens-new-line',
    prop: 'parens-new-line',
    propertyValue: 'parens-new-line'
  }],
  'key-spacing': ['error', { beforeColon: false, afterColon: true, mode: 'strict' }],
  'keyword-spacing': ['error', { before: true, after: true }],
  'lines-between-class-members': ['error', 'always', { exceptAfterOverload: true, exceptAfterSingleLine: true }],
  // 'list-style': ['error', {
  //   empty: 'ignore',
  //   singleLine: {
  //     spacing: 'never',
  //     maxItems: Number.POSITIVE_INFINITY,
  //   },
  //   multiLine: {
  //     minItems: 0,
  //   },
  //   overrides: {
  //     // '{}': { singleLine: { spacing: 'always' } },
  //   },
  // }],
  'max-statements-per-line': ['error', { max: 1 }],
  // 'member-delimiter-style': ['error', ''],
  'multiline-ternary': ['error', 'always-multiline'],
  'new-parens': ['error', 'always'],
  'no-extra-parens': 'off',
  'no-floating-decimal': 'error',
  'no-mixed-operators': 'error',
  'no-mixed-spaces-and-tabs': 'error',
  'no-multi-spaces': 'error',
  'no-multiple-empty-lines': ['error', { max: 2, maxBOF: 0, maxEOF: 1 }],
  'no-tabs': 'error',
  'no-trailing-spaces': 'off',
  'no-whitespace-before-property': 'error',
  'operator-linebreak': ['error', 'before'],
  'padded-blocks': ['error', 'never'],
  'quote-props': ['error', 'as-needed'],
  'quotes': ['error', 'single', { avoidEscape: true, allowTemplateLiterals: 'avoidEscape' }],
  'rest-spread-spacing': ['error', 'never'],
  'semi': ['error', 'never', { beforeStatementContinuationChars: 'always' }],
  'semi-spacing': ['error', { before: false, after: true }],
  'space-before-blocks': ['error', 'always'],
  'space-before-function-paren': ['error', { anonymous: 'always', named: 'never', asyncArrow: 'always', catch: 'always' }],
  'space-in-parens': ['error', 'never'],
  'space-infix-ops': ['error', { int32Hint: true, ignoreTypes: false }],
  'space-unary-ops': ['error', { words: true, nonwords: false }],
  'spaced-comment': ['error', 'always', { block: { exceptions: ['-'], balanced: true } }],
  'template-curly-spacing': ['error', 'never'],
  'template-tag-spacing': ['error', 'never'],
  'type-annotation-spacing': ['error', { before: false, after: true }],
  'type-generic-spacing': 'error',
  'type-named-tuple-spacing': 'error',
  'wrap-iife': ['error', 'inside'],
  'yield-star-spacing': ['error', 'before'],
}
const stylisticRulesPrefixed = Object.fromEntries(Object.entries(stylisticRules).map(([a, b]) => [`@stylistic/${a}`, b]))

/* eslint-enable */

export default defineConfig([
  {
    files: ['**/*.js'],
    languageOptions: {
      globals: globals.browser,
      parserOptions: {
        ecmaFeatures: {
          jsx: true,
        },
      },
    },
    plugins: {
      js
    },
    extends: ['js/recommended', eslintReact.configs.recommended]
  },
  {
    plugins: {
      '@stylistic': stylistic
    },
    rules: {
      // 'react/react-in-jsx-scope': 'off',
      // 'react/prop-types': 'off',

      ...stylisticRulesPrefixed
    }
  }
])
