module.exports = {
  parser: 'babel-eslint', // Specifies the ESLint parser
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:prettier/recommended',
    'plugin:cypress/recommended',
    'plugin:jest/recommended'
  ],
  settings: {
    react: {
      version: 'detect'
    }
  },
  env: {
    browser: true,
    node: true,
    es6: true
  },
  plugins: ['react', 'react-hooks', 'inclusive-language'],
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    },
    ecmaVersion: 2018, // Allows for the parsing of modern ECMAScript features
    sourceType: 'module' // Allows for the use of imports
  },
  rules: {
    'inclusive-language/use-inclusive-words': 'error'
  },
  overrides: [
    {
      files: ['**/cypress/**'],
      rules: {
        'jest/expect-expect': 'off',
        'jest/no-commented-out-tests': 'off',
        'jest/no-disabled-tests': 'off',
        'jest/no-export': 'off',
        'jest/no-focused-tests': 'off',
        'jest/no-identical-title': 'off',
        'jest/no-jest-import': 'off',
        'jest/no-mocks-import': 'off',
        'jest/no-jasmine-globals': 'off',
        'jest/no-standalone-expect': 'off',
        'jest/no-test-callback': 'off',
        'jest/no-test-prefixes': 'off',
        'jest/no-try-expect': 'off',
        'jest/valid-describe': 'off',
        'jest/valid-expect': 'off',
        'jest/valid-expect-in-promise': 'off'
      }
    }
  ]
}
