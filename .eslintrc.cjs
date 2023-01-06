module.exports = {
    extends: [
        'plugin:svelte/recommended'
    ],
    parser: '@typescript-eslint/parser',
    parserOptions: {
        extraFileExtensions: ['.svelte'], // This is a required setting in `@typescript-eslint/parser` v4.24.0.
    },
    'overrides': [
        {
            files: ['*.svelte'],
            parser: 'svelte-eslint-parser',
            parserOptions: {
                parser: '@typescript-eslint/parser',
            }
        }
    ],
    rules: {
        indent: ['error', 4],
        quotes: [2, 'single'],
        semi: [2, 'never'],
        'no-use-before-define': [2, 'nofunc'],
        'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
        'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
        'comma-spacing': [2, {
            before: false,
            after: true
        }],
        'key-spacing': [1, {
            beforeColon: false,
            afterColon: true
        }],
        'import/first': [0],
        'object-property-newline': [2, {
            allowAllPropertiesOnSameLine: true
        }]
    }
}