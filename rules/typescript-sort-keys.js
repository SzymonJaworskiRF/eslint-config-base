module.exports = {
  overrides: [
    {
      files: ['*.ts', '*.tsx'],
      rules: {
        'typescript-sort-keys/interface': 'error',
        'typescript-sort-keys/string-enum': 'error',
      },
    },
  ],
}
