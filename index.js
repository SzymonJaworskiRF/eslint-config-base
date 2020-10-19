module.exports = {
  env: {
    browser: true,
    commonjs: true,
    es6: true,
    jest: true,
    node: true,
  },
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: './tsconfig.json',
    ecmaVersion: 2020,
    sourceType: 'module',
  },
  overrides: [
    {
      files: ['*.js'],
      parser: 'babel-eslint',
      parserOptions: {
        ecmaVersion: 2020,
        sourceType: 'module',
      },
      rules: {
        camelcase: 'off',
      },
    },
    {
      files: ['plopfile.ts'],
      rules: {
        'import/no-default-export': 'off',
      },
    },
  ],
  settings: {
    ['import/resolver']: {
      node: {
        paths: ['src'],
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
      },
    },
    jest: {
      version: 26,
    },
  },
  plugins: [
    '@typescript-eslint',
    'ban',
    'import',
    'jest',
    'prettier',
    'simple-import-sort',
    'sort-keys-fix',
    'typescript-sort-keys',
    'unicorn',
  ],
  extends: [
    './rules/ban',
    './rules/best-practices',
    './rules/import',
    './rules/jest',
    './rules/possible-errors',
    './rules/prettier',
    './rules/simple-import-sort',
    './rules/sort-keys-fix',
    './rules/stylistics',
    './rules/typescript',
    './rules/typescript-sort-keys',
    './rules/unicorn',
    './rules/variables',
  ].map((path) => require.resolve(path)),
}
