module.exports = {
  rules: {
    'import/no-unresolved': 'error',
    'import/named': 'error',
    'import/default': 'error',
    'import/namespace': 'error',
    'import/no-restricted-paths': ['error', { zones: [{ target: './client', from: './server' }] }],
    'import/no-absolute-path': 'error',
    'import/no-dynamic-require': 'error',
    // 'import/no-internal-modules': 'error',
    // 'import/no-webpack-loader-syntax': 'error',
    'import/no-self-import': 'error',
    'import/no-cycle': 'error',
    'import/no-useless-path-segments': ['error', { noUselessIndex: true }],
    // 'import/no-relative-parent-imports': 'error',
    'import/export': 'error',
    'import/no-named-as-default': 'error',
    'import/no-named-as-default-member': 'error',
    'import/no-deprecated': 'error',
    // 'import/no-extraneous-dependencies': [
    //   'error',
    //   {
    //     devDependencies: ['**/*.test.ts', '**/*.spec.ts', '**/*.test.tsx', '**/*.spec.tsx'],
    //     optionalDependencies: true,
    //     peerDependencies: true,
    //     bundledDependencies: true,
    //   },
    // ],
    'import/no-mutable-exports': 'error',
    'import/no-unused-modules': 'error',
    // 'import/unambiguous': 'error',
    // 'import/no-commonjs': 'error',
    // 'import/no-amd': 'error',
    // 'import/no-nodejs-modules': 'error',
    'import/first': 'error',
    // 'import/exports-last': 'error',
    'import/no-duplicates': 'error',
    'import/no-namespace': 'error',
    'import/extensions': ['error', 'never', { svg: 'always', png: 'always', jpg: 'always' }],
    'import/order': [
      'error',
      {
        'groups': [
          ['builtin', 'external'],
          ['internal', 'sibling', 'parent'],
        ],
        'newlines-between': 'always',
      },
    ],
    'import/newline-after-import': 'error',
    // 'import/prefer-default-export': 'error',
    // 'import/max-dependencies': 'error',
    // 'import/no-unassigned-import': 'error',
    // 'import/no-named-default': 'error',
    'import/no-default-export': 'error',
    // 'import/no-named-export': 'error',
    // 'import/no-anonymous-default-export': 'error',
    // 'import/group-exports': 'error',
  },
}
