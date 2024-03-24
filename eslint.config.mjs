import eslint from '@eslint/js';
import typescriptEslint from 'typescript-eslint';
import prettier from 'eslint-config-prettier';

export default typescriptEslint.config(
  eslint.configs.recommended,
  ...typescriptEslint.configs.recommendedTypeChecked,
  {
    languageOptions: {
      parserOptions: {
        project: 'tsconfig.json',
      },
      sourceType: 'commonjs',
      globals: {
        console: 'readonly',
      },
    },
    rules: {
      // NOTE(roman): any eslint rule can be disable here as needed
      '@typescript-eslint/no-unsafe-argument': 'off',
      '@typescript-eslint/no-unsafe-member-access': 'off',
      '@typescript-eslint/no-unsafe-assignment': 'off',
      '@typescript-eslint/no-var-requires': 'off',
    },
  },
  {
    files: ['eslint.config.mjs', 'prettier.config.cjs'],
    extends: [typescriptEslint.configs.disableTypeChecked],
  },
  prettier,
);
