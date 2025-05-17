const tsParser = (await import('@typescript-eslint/parser')).default;
const tsPlugin = (await import('@typescript-eslint/eslint-plugin')).default;

export default [
  {
    files: ['src/**/*.ts'],
    languageOptions: {
      parser: tsParser,
      parserOptions: { project: './tsconfig.json' },
    },
    plugins: {
      '@typescript-eslint': tsPlugin,
    },
    rules: {},
  },
];