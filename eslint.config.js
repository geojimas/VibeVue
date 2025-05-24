import pluginVue from 'eslint-plugin-vue'
import globals from 'globals'

export default [
  // add more generic rulesets here, such as:
  // js.configs.recommended,
  ...pluginVue.configs['flat/recommended'],
  {
    ignores: ['dist/**'],
  },
  // ...pluginVue.configs['flat/vue2-recommended'], // Use this if you are using Vue.js 2.x.
  {
    rules: {
      // override/add rules settings here, such as:

      // Additional Vue 3 specific rules
      'vue/multi-word-component-names': 'off', // Disable the rule that requires multi-word component names in Vue
      'vue/component-api-style': ['error', ['script-setup', 'composition']], // Enforce specific API style for Vue components
      'vue/component-name-in-template-casing': ['error', 'PascalCase'], // Enforce PascalCase for component names in templates
      'vue/component-options-name-casing': ['error', 'PascalCase'], // Enforce PascalCase for component option names
      'vue/define-emits-declaration': ['error', 'type-based'], // Enforce type-based declarations for emits
      'vue/define-props-declaration': ['error', 'type-based'], // Enforce type-based declarations for props
      'vue/no-deprecated-slot-attribute': 'error', // Disallow the use of deprecated `slot` attribute
      'vue/no-deprecated-v-on-native-modifier': 'error', // Disallow the use of deprecated `v-on: native` modifier
      'vue/no-unused-refs': 'error', // Disallow unused template refs
      'vue/prefer-import-from-vue': 'error', // Prefer importing from Vue directly
      'vue/require-explicit-emits': 'error', // Require explicit emits declarations
      'vue/script-indent': ['error', 2, { baseIndent: 1 }], // Enforce consistent indentation for script tags
      'vue/v-on-event-hyphenation': ['error', 'always', { autofix: true }], // Enforce hyphenation for event names in templates
      'vue/valid-define-props': 'error', // Ensure props definitions are valid
      'vue/require-prop-types': 'error',
      'vue/valid-v-memo': 'error', // Ensure usage of valid v-memo directive
      'vue/no-v-html': 'warn', // Warn about using v-html due to XSS risk
      'vue/attribute-hyphenation': ['error', 'always'], // Enforce kebab-case in HTML attributes
      'vue/no-template-shadow': 'error', // Prevent shadowed variables in template

      // General JavaScript style rules
      'semi': ['error', 'never'], // Require semicolons
      'quotes': ['error', 'single', { avoidEscape: true }], // Enforce single quotes
      'no-unused-vars': ['warn', { argsIgnorePattern: '^_' }], // Warn unused vars but allow unused function args starting with _
      'no-console': 'warn', // Warn about console.log (disable in production builds)
      'no-debugger': 'error', // Disallow debugger statements
      'eqeqeq': ['error', 'always'], // Enforce === and !==
      'space-infix-ops': ['error', { int32Hint: false }], // spaces specifically around the = in variable declarations
      'operator-linebreak': ['error', 'after'],
      'no-var': 'error', // Disallow var, enforce let/const
      'prefer-const': 'error', // Use const where possible
      'arrow-spacing': ['error', { before: true, after: true }], // Consistent spacing around =>
      'object-curly-spacing': ['error', 'always'], // Require spacing inside curly braces
      'comma-dangle': ['error', 'only-multiline'], // Allow trailing commas in multiline objects/arrays
    },
    languageOptions: {
      sourceType: 'module',
      globals: {
        ...globals.browser
      }
    }
  }
]