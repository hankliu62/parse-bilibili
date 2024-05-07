const fabric = require('@hankliu/fabric');

module.exports = [
  {
    ...fabric.eslint,
    files: ['src/**/*.ts', 'src/**/*.tsx', 'src/**/*.js'],
  },
  {
    ignores: ['public/*', 'out/*', 'docs/*'],
    rules: {
      '@typescript-eslint/no-unused-expressions': 'off',
    },
  },
];
