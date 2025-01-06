const nx = require('@nx/eslint-plugin');

module.exports = [
  ...nx.configs['flat/base'],
  ...nx.configs['flat/typescript'],
  ...nx.configs['flat/javascript'],
  {
    ignores: ['**/dist'],
  },
  {
    files: ['**/*.ts', '**/*.tsx'],
    rules: {
      '@nx/dependency-checks': 'off',
      '@next/next/no-html-link-for-pages': 'off',
      '@next/next/no-img-element': 'off',
      '@next/next/no-page-custom-font': 'off',
      '@next/next/no-script-component-in-head': 'off',
      '@next/next/no-sync-scripts': 'off',
      '@next/next/no-title-in-document-head': 'off',
      '@next/next/no-unknown-value': 'off',
      '@next/next/no-unstyled-link': 'off',
      '@next/next/no-head-element': 'off',
      '@next/next/no-head-import-in-document': 'off',
      '@next/next/no-head-import-in-entry-file': 'off',
      '@next/next/no-head-import-in-document-head': 'off',
      '@nx/enforce-module-boundaries': [
        'error',
        {
          enforceBuildableLibDependency: true,
          allow: ['^.*/eslint(\\.base)?\\.config\\.[cm]?js$'],
          depConstraints: [
            {
              sourceTag: '*',
              onlyDependOnLibsWithTags: ['*'],
            },
          ],
        },
      ],
    },
  },
  {
    files: ['**/*.ts', '**/*.tsx', '**/*.js', '**/*.jsx'],
    // Override or add rules here
    rules: {},
  },
];
