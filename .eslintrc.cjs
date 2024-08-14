module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  plugins: ['perfectionist', 'unused-imports', '@typescript-eslint', 'prettier'],
  extends: ['airbnb', 'airbnb-typescript', 'airbnb/hooks', 'prettier'],
  parserOptions: {
    sourceType: 'module',
    ecmaVersion: 'latest',
    ecmaFeatures: { jsx: true },
    project: './tsconfig.json',
  },
  settings: {
    'import/resolver': {
      typescript: {
        project: './tsconfig.json',
      },
    },
  },
  rules: {
    // general
    radix: 'off',
    'no-alert': 'warn',
    'no-console': 'off',
    'no-unused-vars': 'off',
    'no-nested-ternary': 'off',
    'no-param-reassign': 'off',
    'no-underscore-dangle': 'off',
    'no-restricted-exports': 'off',
    'no-promise-executor-return': 'off',
    'import/prefer-default-export': 'off',
    'import/extensions': 'off',
    'prefer-destructuring': ['warn', { object: true, array: false }],

    // typescript
    '@typescript-eslint/naming-convention': 'off',
    '@typescript-eslint/no-use-before-define': 'off',
    '@typescript-eslint/consistent-type-exports': 'warn',
    '@typescript-eslint/consistent-type-imports': 'warn',
    '@typescript-eslint/no-unused-vars': ['warn', { args: 'none' }],

    // react
    'react/no-children-prop': 'error',
    'react/react-in-jsx-scope': 'off',
    'react/no-array-index-key': 'off',
    'react/require-default-props': 'off',
    'react/jsx-props-no-spreading': 'off',
    'react/function-component-definition': 'off',
    'react/jsx-no-useless-fragment': ['warn', { allowExpressions: true }],
    'react/no-unstable-nested-components': ['warn', { allowAsProps: true }],
    'react/jsx-no-duplicate-props': ['warn', { ignoreCase: false }],

    // jsx-a11y
    'jsx-a11y/anchor-is-valid': 'off',
    'jsx-a11y/control-has-associated-label': 'off',

    // unused imports
    'unused-imports/no-unused-imports': 'off',
    'unused-imports/no-unused-vars': [
      'off',
      { vars: 'all', varsIgnorePattern: '^_', args: 'after-used', argsIgnorePattern: '^_' },
    ],

    // perfectionist
    'perfectionist/sort-exports': ['warn', { order: 'asc', type: 'line-length' }],
    'perfectionist/sort-named-imports': ['warn', { order: 'asc', type: 'line-length' }],
    'perfectionist/sort-named-exports': ['warn', { order: 'asc', type: 'line-length' }],
    'perfectionist/sort-imports': [
      'warn',
      {
        order: 'asc',
        type: 'line-length',
        'newlines-between': 'always',
        groups: [
          'style',
          'type',
          ['builtin', 'external'],
          'custom-mui',
          'custom-routes',
          'custom-hooks',
          'custom-utils',
          'internal',
          'custom-components',
          'custom-sections',
          'custom-auth',
          'custom-types',
          ['parent', 'sibling', 'index'],
          ['parent-type', 'sibling-type', 'index-type'],
          'object',
          'unknown',
        ],
        'custom-groups': {
          value: {
            ['custom-mui']: '@mui/**',
            ['custom-auth']: 'src/auth/**',
            ['custom-hooks']: 'src/hooks/**',
            ['custom-utils']: 'src/utils/**',
            ['custom-types']: 'src/types/**',
            ['custom-routes']: 'src/routes/**',
            ['custom-sections']: 'src/sections/**',
            ['custom-components']: 'src/components/**',
          },
        },
        'internal-pattern': ['src/**'],
      },
    ],
  },
}
