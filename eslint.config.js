import { globals } from  'globals';
import { pluginJs } from  '@eslint/js';
import { tseslint } from  'typescript-eslint';
import eslintConfigPrettier from "eslint-config-prettier";


/** @type {import('eslint').Linter.Config[]} */
export default [
  {files: ['**/*.{js,mjs,cjs,ts}']},
  {
    languageOptions: { globals: globals.browser },
    rules: {
      camelcase: 'error',
      'comma-dangle': ['error', 'always-multiline'], // Enforce trailing commas in multiline
      'curly': ['error', 'all'], // Require curly braces for all control statements
      'no-console': 'warn', // Warn about console.log usage
      'no-unused-vars': 'warn', // No unused variables
      'no-undef': 'warn', // No undefined variables
      'no-var': 'error',  // Prefer let/const over var
      'prefer-const': 'error',  // Use const when variable is never reassigned
      'eqeqeq': ['error', 'always'],  // Require === and !==
      'no-multiple-empty-lines': ['warn', { // Limit empty lines
        max: 1,        // General maximum
        maxEOF: 1,     // Maximum at end of file
        maxBOF: 0      // Maximum at beginning of file
      }],
      'arrow-body-style': ['error', 'as-needed'],  // Cleaner arrow functions
      'no-duplicate-imports': 'error',  // No multiple imports from same module
      'no-template-curly-in-string': 'error',  // Catch misused template literals
    },
  },
  pluginJs.configs.recommended,
  ...tseslint.configs.recommended,
  eslintConfigPrettier
];