module.exports = {
    parser: 'babel-eslint',
    plugins: ['react'],
    extends: ['eslint:recommended', 'plugin:react/recommended', 'plugin:react-hooks/recommended'],
    parserOptions: {
        ecmaVersion: 9,
        ecmaFeatures: {
            jsx: true,
            experimentalObjectRestSpread: true,
        },
        sourceType: 'module',
    },
    settings: {
        react: {
            version: 'detect',
        },
    },
    rules: {
        'prettier/prettier': 0, // turn off all of prettier warning
        'eqeqeq': 'error', // warning == and !=
        'require-jsdoc': ['off'], // no need jsdoc in this front end project
        'no-invalid-this': 'off', // allow this keywords outside of classes or class-like objects
        'brace-style': ['error', 'allman', { allowSingleLine: true }], // enforces Allman brace style
        'comma-dangle': ['warn', 'always-multiline'], // don't care trailing commas
        'comma-spacing': 'error',
        'curly': 'error', // require brace for all control statements
        'object-curly-spacing': ['error', 'always'], // requires spacing inside of braces (except {})
        'semi': ['error', 'always'], // require senmicolon
        'multiline-ternary': ['error', 'always-multiline'], // enforces newlines between the operands of a ternary expression if the expression spans multiple lines.
        'no-console': 'off', // free to use console
        'no-debugger': 'error', // disallow debugger
        'no-empty': 'off',
        'no-extra-semi': 'error', // disallow unnecessary semicolons
        'no-constant-condition': 'error', // disallow constant condition eg: if(true)
        'no-alert': 'error', // disallow alert, confirm, promp
        'one-var-declaration-per-line': ['error', 'initializations'], // disallow var initializations on one line
        'one-var': ['error', { uninitialized: 'always', initialized: 'never' }], // allow let a, b, c, d; disallow let a = true, b = false
        'operator-linebreak': [
            'error',
            'after',
            {
                overrides: { '?': 'before', ':': 'before' },
            },
        ], // requires linebreaks to be placed after the operator
        'max-len': [
            'error',
            {
                code: 180,
                ignoreComments: true,
                ignoreTrailingComments: true,
                ignoreUrls: true,
                ignoreStrings: true,
                ignoreTemplateLiterals: true,
                ignoreRegExpLiterals: true,
            },
        ], // maximum line length
        indent: [
            'error',
            4,
            {
                SwitchCase: 1,
                MemberExpression: 1,
                flatTernaryExpressions: true,
                offsetTernaryExpressions: false,
                ObjectExpression: 'first', // all properties in the object should be aligned with the first property
                VariableDeclarator: 'first', // all declaration should be aligned with the first declare
            },
        ], // indent 4 space, switch case indent 1 level
        quotes: ['error', 'single', { avoidEscape: true }], // requires the use of single quotes, can use double quotes in string content
        'no-multi-str': 'error', // disallow multiline strings (by placing \ at the end)
        'no-mixed-spaces-and-tabs': 'error', // disallows mixed spaces and tabs for indentation
        'no-trailing-spaces': ['error', { skipBlankLines: true }], // disallow trailing whitespace at the end of lines, allow in blank lines
        'space-unary-ops': ['error', { nonwords: false }], // require space after unary operators (new, delete, typeof, void, yield), no space after unary operators -, +, --, ++, !, !!
        'no-unused-vars': ['warn', { args: 'none' }], // warning about unused variables global/local, ignore arguments/params
        'keyword-spacing': ['error'], // require space before and after keyword, eg: if, else...
        'space-infix-ops': 'error', // require spacing around infix operators (+, -, ?, : =...)
        'space-before-blocks': ['error', 'always'], // blocks must always have at least one preceding space.
        'eol-last': 'error', // enforces that files end with a newline
        'space-in-parens': ['error', 'never'], // enforces zero spaces inside of parentheses
        'no-multiple-empty-lines': 'error', // no more than 2 blank lines
        'no-multi-spaces': 'error', // disallow multiple spaces, eg: let a =   1;
        'key-spacing': ['error', { beforeColon: false, afterColon: true }], // require no space before colon, space after colon (in object literal properties)
        'spaced-comment': [
            'error',
            'always',
            {
                line: {
                    exceptions: ['-', '+'],
                    markers: ['=', '!', '/', '*'],
                },
                block: {
                    exceptions: ['-', '+'],
                    markers: ['=', '!', ':', '::'],
                    balanced: true,
                },
            },
        ], // require a space after "//" mark
        'no-prototype-builtins': ['off'], // free to use builtin protoype because we don't deal with inherit
        'no-class-assign': ['off'], // temporary let the team assign it since we feel comfortable with MobX
        'prefer-const': ['warn'], // free to use const, let

        // React rules
        'react/default-props-match-prop-types': [
            'error',
            {
                allowRequiredDefaults: true,
            },
        ],
        'react/display-name': 'warn',
        'react/forbid-prop-types': 'off',
        'react/jsx-boolean-value': 'warn',
        'react/jsx-closing-bracket-location': 'warn',
        'react/jsx-closing-tag-location': 'warn',
        'react/jsx-curly-spacing': 'warn',
        'react/jsx-indent-props': ['error', 4],
        'react/jsx-pascal-case': 'error',
        'react/jsx-first-prop-new-line': ['warn', 'multiline-multiprop'],
        'react/jsx-max-props-per-line': ['warn', { maximum: 1 }],
        'react/jsx-props-no-multi-spaces': 'error',
        'react/jsx-wrap-multilines': [
            'error',
            {
                declaration: 'parens-new-line',
                assignment: 'parens-new-line',
                return: 'parens-new-line',
                arrow: 'parens-new-line',
                condition: 'parens-new-line',
                logical: 'parens-new-line',
                prop: 'parens-new-line',
            },
        ],
        'react/jsx-tag-spacing': [
            'error',
            {
                closingSlash: 'never',
                beforeSelfClosing: 'always',
                afterOpening: 'never',
                beforeClosing: 'never',
            },
        ],
        'react/jsx-no-duplicate-props': 'error',
        'react/jsx-no-literals': 'off',
        'react/jsx-no-undef': 'warn',
        'react/jsx-sort-props': [
            'warn',
            {
                noSortAlphabetically: true,
                reservedFirst: true,
                shorthandLast: true,
                callbacksLast: true,
            },
        ],
        'react/jsx-uses-react': 'warn',
        'react/jsx-uses-vars': 'warn',
        'react/no-children-prop': 'error',
        'react/no-danger': 'warn',
        'react/no-did-mount-set-state': 'off',
        'react/no-did-update-set-state': 'warn',
        'react/no-direct-mutation-state': 'warn',
        'react/no-multi-comp': 'off',
        'react/no-unknown-property': 'warn',
        'react/no-unused-prop-types': 'error',
        'react/prefer-es6-class': 'warn',
        'react/prop-types': 'warn',
        'react/react-in-jsx-scope': 'off',
        'react/self-closing-comp': 'warn',
        'react/sort-comp': 'off',
        'react/no-string-refs': 'warn',
    },
    env: {
        browser: true, // apply rules to browser
        node: true, // to node
        es6: true, // to es6
        mocha: true, // to mocha test
    },
    globals: {
        '-': 'off',
        cy: true, // to cypress
        Cypress: true, // to cypress
        define: true, // alow define in global
        expect: true, // expect for test
        it: true, // it for test
        require: true, // alow require in global
    },
    overrides: [
        {
            files: ['*.ts', '*.tsx'],
            parser: '@typescript-eslint/parser',
            plugins: ['@typescript-eslint'],
            extends: [
                'plugin:@typescript-eslint/eslint-recommended',
                'plugin:@typescript-eslint/recommended',
            ],
            rules: {
                'no-undef': 'off',
                'react/default-props-match-prop-types': 'off',
                'react/prop-types': 'off',
                'react/require-default-props': 'off',
                // Typescript
                '@typescript-eslint/explicit-module-boundary-types': 'warn',
                '@typescript-eslint/explicit-function-return-type': 'off',
                '@typescript-eslint/explicit-member-accessibility': 'off',
                '@typescript-eslint/indent': 'off',
                '@typescript-eslint/member-delimiter-style': 'off',
                '@typescript-eslint/no-explicit-any': 'off',
                '@typescript-eslint/no-var-requires': 'off',
                '@typescript-eslint/no-use-before-define': 'off',
                '@typescript-eslint/no-unused-vars': ['warn', { args: 'none' }], // warning about unused variables global/local, ignore arguments/params
                '@typescript-eslint/ban-types': 'off',
                '@typescript-eslint/no-empty-function': 'off',
                '@typescript-eslint/no-this-alias': 'warn',
            },
        },
    ],
};
