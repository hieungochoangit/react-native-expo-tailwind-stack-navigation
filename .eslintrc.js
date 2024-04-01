module.exports = {
  root: true,
  extends: [
    'universe/native',
    'universe/shared/typescript-analysis',
    'universe/native',
    'universe/node',
    'universe/web',
  ],
  overrides: [
    {
      files: ['*.ts', '*.tsx', '*.d.ts'],
      parserOptions: {
        project: './tsconfig.json',
      },
      rules: {
        'import/order': 'off',
      },
    },
  ],
};
